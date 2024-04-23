/*
Need pupeteer installed: `npm install -g puppeteer`

*/
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4000/one-page.html', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'koala-sampler-manual.pdf', format: 'A4'});

  await browser.close();
})();
