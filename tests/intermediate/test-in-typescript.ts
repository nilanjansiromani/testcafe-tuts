import { Selector } from "testcafe";

fixture("This is a test written in typescript").page(
  `https://devexpress.github.io/testcafe/example`
);

const innerText: string = "Thank you, John Smith!";

test("My first test", async (test) => {
  await test
    .typeText("#developer-name", "John Smith")
    .click("#submit-button")

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector("#article-header").innerText)
    .eql(innerText);
});
