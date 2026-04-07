#!/usr/bin/env node
// Checks internal links in the built _site/ directory.
// Exits with code 1 if any broken links are found.

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const excludes = args.filter(a => a.startsWith('--exclude=')).map(a => a.split('=')[1]);
const siteDir = args.find(a => !a.startsWith('--')) || '_site';

if (!fs.existsSync(siteDir)) {
  console.error(`ERROR: ${siteDir} directory not found. Run 'bundle exec jekyll build' first.`);
  process.exit(1);
}

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractHrefs(html) {
  const hrefs = [];
  const regex = /href="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    hrefs.push(match[1]);
  }
  return hrefs;
}

function extractIds(html) {
  const ids = new Set();
  const regex = /id="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    ids.add(match[1]);
  }
  return ids;
}

// Cache file contents and IDs
const idCache = new Map();
function getIds(filePath) {
  if (!idCache.has(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    idCache.set(filePath, extractIds(html));
  }
  return idCache.get(filePath);
}

function resolveTarget(href, sourceFile) {
  // Strip fragment
  const hashIndex = href.indexOf('#');
  const urlPath = hashIndex >= 0 ? href.substring(0, hashIndex) : href;
  const fragment = hashIndex >= 0 ? href.substring(hashIndex + 1) : null;

  if (!urlPath) return { targetFile: sourceFile, fragment };

  let resolved;
  if (urlPath.startsWith('/')) {
    // Absolute path from site root
    resolved = path.join(siteDir, urlPath);
  } else {
    // Relative path from source file's directory
    resolved = path.resolve(path.dirname(sourceFile), urlPath);
  }

  // Try: exact file, directory/index.html, path.html
  if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
    return { targetFile: resolved, fragment };
  }
  const withIndex = path.join(resolved, 'index.html');
  if (fs.existsSync(withIndex)) {
    return { targetFile: withIndex, fragment };
  }
  const withHtml = resolved + '.html';
  if (fs.existsSync(withHtml)) {
    return { targetFile: withHtml, fragment };
  }

  return { targetFile: null, fragment };
}

const htmlFiles = findHtmlFiles(siteDir);
let broken = 0;

for (const file of htmlFiles) {
  const relSource = path.relative(siteDir, file);
  if (excludes.some(ex => relSource.startsWith(ex))) continue;

  const html = fs.readFileSync(file, 'utf8');
  const hrefs = extractHrefs(html);

  for (const href of hrefs) {
    // Skip external, mailto, javascript, pure fragment links
    if (/^(https?:|mailto:|javascript:)/.test(href)) continue;
    if (href.startsWith('#')) continue;

    const { targetFile, fragment } = resolveTarget(href, file);

    if (!targetFile) {
      console.log(`BROKEN LINK: ${relSource} -> ${href} (file not found)`);
      broken++;
      continue;
    }

    if (fragment) {
      const ids = getIds(targetFile);
      if (!ids.has(fragment)) {
        console.log(`BROKEN ANCHOR: ${relSource} -> ${href} (#${fragment} not found)`);
        broken++;
      }
    }
  }
}

if (broken === 0) {
  console.log('All internal links OK.');
} else {
  console.log(`\n${broken} broken link(s) found.`);
}

process.exit(broken > 0 ? 1 : 0);
