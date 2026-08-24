/*
Need pupeteer installed: `npm install -g puppeteer`

*/
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:1843/one-page/', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'koala-sampler-manual.pdf', format: 'A4'});

  await browser.close();
})();
