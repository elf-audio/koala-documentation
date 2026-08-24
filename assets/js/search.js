---
---
{%- comment -%}
  Build the search index from the mobile collection.

  Chapter fragments (paths containing /chapters/) are rendered inline into
  their parent chapter page (their standalone pages are deleted after build),
  so each fragment entry links to the parent chapter URL plus the anchor of
  the section heading it appears under. Anchors are derived from the section
  title the same way kramdown derives heading ids: strip punctuation, then
  lowercase and hyphenate.
{%- endcomment -%}
const documents = [
{%- assign docs = site.mobile -%}
{%- assign counter = 0 -%}
{%- for doc in docs -%}
{%- if doc.hidden == true -%}{%- continue -%}{%- endif -%}
{%- assign entry_url = doc.url -%}
{%- assign entry_title = doc.title -%}
{%- if doc.url contains '/chapters/' -%}
  {%- assign parts = doc.url | split: '/' -%}
  {%- assign chapter_dir = parts[3] -%}
  {%- assign entry_url = '/' | append: parts[1] | append: '/' | append: chapter_dir | append: '/' -%}

  {%- comment -%} Parent root-chapter title, e.g. '4-sample' -> 'Sample' {%- endcomment -%}
  {%- assign parent_title = '' -%}
  {%- for root in docs -%}
    {%- unless root.url contains '/chapters/' -%}
      {%- assign root_dir = root.url | split: '/' | last -%}
      {%- if root_dir == chapter_dir -%}{%- assign parent_title = root.title -%}{%- endif -%}
    {%- endunless -%}
  {%- endfor -%}

  {%- comment -%} Section title from the sibling 0-title doc, if any {%- endcomment -%}
  {%- assign fname = doc.path | split: '/' | last -%}
  {%- assign dirpath = doc.path | remove: fname -%}
  {%- assign group_title = '' -%}
  {%- for sib in docs -%}
    {%- assign sfname = sib.path | split: '/' | last -%}
    {%- assign sdir = sib.path | remove: sfname -%}
    {%- if sdir == dirpath and sfname contains '0-title' -%}{%- assign group_title = sib.title -%}{%- endif -%}
  {%- endfor -%}

  {%- comment -%} Untitled fragments get Jekyll's filename-derived '2 Item' style titles {%- endcomment -%}
  {%- assign junk_title = false -%}
  {%- if entry_title contains ' Item' or entry_title contains ' Title' -%}{%- assign junk_title = true -%}{%- endif -%}
  {%- if group_title contains ' Item' or group_title contains ' Title' -%}{%- assign group_title = '' -%}{%- endif -%}

  {%- comment -%} Titled fragments start with a heading repeating the title, so its id is the slugified title {%- endcomment -%}
  {%- assign anchor_source = '' -%}
  {%- if junk_title == false -%}
    {%- assign anchor_source = entry_title -%}
  {%- elsif group_title != '' -%}
    {%- assign anchor_source = group_title -%}
  {%- endif -%}

  {%- if junk_title -%}
    {%- if group_title != '' -%}
      {%- assign entry_title = group_title -%}
    {%- elsif parent_title != '' -%}
      {%- assign entry_title = parent_title -%}
    {%- endif -%}
  {%- endif -%}

  {%- if anchor_source != '' -%}
    {%- assign anchor = anchor_source | remove: '.' | remove: ',' | remove: ':' | remove: '(' | remove: ')' | remove: '[' | remove: ']' | remove: "'" | slugify -%}
    {%- assign entry_url = entry_url | append: '#' | append: anchor -%}
  {%- endif -%}
{%- endif -%}
{%- if counter > 0 %},{% endif %}
  {
    "id": {{ counter }},
    "title": {{ entry_title | jsonify }},
    "url": {{ entry_url | jsonify }},
    "content": {{ doc.content | newline_to_br | strip_newlines | replace: '<br />', ' ' | strip_html | jsonify }}
  }
{%- assign counter = counter | plus: 1 -%}
{%- endfor %}
]

var documentsById = {};
documents.forEach(function (doc) { documentsById[doc.id] = doc; });

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('content')
    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});

function search(term) {
    var container = document.getElementById('searchresults');
    container.textContent = '';
    if (!term) {
        return false;
    }

    var headline = document.createElement('p');
    headline.textContent = "Search results for '" + term + "'";
    container.appendChild(headline);

    var list = document.createElement('ul');
    container.appendChild(list);

    var results = idx.search(term);
    if (results.length == 0) {
        results = idx.search(term + '*');
    }

    if (results.length == 0) {
        var empty = document.createElement('li');
        empty.className = 'searchresult';
        empty.textContent = 'No results found.';
        list.appendChild(empty);
        return false;
    }

    // Several fragments can belong to the same section; show each section once.
    var seen = {};
    results.forEach(function (result) {
        var doc = documentsById[result.ref];
        if (!doc || seen[doc.url]) {
            return;
        }
        seen[doc.url] = true;

        var link = document.createElement('a');
        link.href = doc.url;

        var title = document.createElement('span');
        title.className = 'title';
        title.textContent = doc.title;

        var body = document.createElement('span');
        body.className = 'body';
        body.textContent = doc.content.substring(0, 160) + '...';

        var url = document.createElement('span');
        url.className = 'url';
        url.textContent = doc.url;

        link.appendChild(title);
        link.appendChild(document.createElement('br'));
        link.appendChild(body);
        link.appendChild(document.createElement('br'));
        link.appendChild(url);

        var item = document.createElement('li');
        item.className = 'searchresult';
        item.appendChild(link);
        list.appendChild(item);
    });
    return false;
}
