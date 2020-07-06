import { Selector, RequestLogger } from "testcafe";
import fs from "fs";
import path from "path";

const url =
  "https://demos.devexpress.com/ASPxGridViewDemos/Exporting/Exporting.aspx";

const logger = RequestLogger(
  { url, method: "post" },
  {
    logResponseHeaders: true,
    logResponseBody: true,
  }
);

fixture`Export`.page(url).requestHooks(logger);

test("export to csv", async (t) => {
  const exportToCSVButton = Selector("span").withText("Export to CSV");

  await t
    .click(exportToCSVButton)
    .expect(logger.contains((r) => r.response.statusCode === 200))
    .ok();

  // After clicking 'Export', the response comes as a gziped CSV.
  // The browser unpacks the archive and gives you the file that was inside.
  // The test receives the archive as is.
  const filePath = path.join(__dirname, "exported-grid.zip");

  console.log(filePath);
  console.log(logger.requests[0].response.headers);

  fs.writeFileSync(filePath, logger.requests[0].response.body);

  // Here you can use 3rd party modules to
  // unpack the archive, parse CSV and check the data.
  // Or you can just verify the file manually.
});
