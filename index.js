/*
 Requirements:
 - yarn (https://yarnpkg.com/lang/en/docs/install/#mac-stable)

 To run this:
 - cd xxx/automation
 - yarn
 - node index.js
*/

const puppeteer = require('puppeteer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fcagroup.esupplierconnect.com/irj/portal/supplier_connect/global?guest_user=Guest_SC&amp;fullscroll=true');
  await page.click('#logonBtn');

  await sleep(5000);

  await page.screenshot({path: Date.now() + 'example.png'});

  await browser.close();
})();
