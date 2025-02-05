const puppeteer = require("puppeteer")

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://groupexpro.com/")
  // Daha fazla işlem ekleyebilirsin
  await browser.close()
}

run()
