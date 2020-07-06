/** This is a very basic test using 
 * All we are doing here is basically opening a page and then checking 
 * If a selector is found , then go ahead and check and then type something and get it done.
 */

import { Selector } from "testcafe"; // first import testcafe selectors

fixture`Getting Started`.page // declare the fixture
`https://devexpress.github.io/testcafe/example`; // specify the start page

//then create a test and place your code there
test("My first test", async (t) => {
  await t
    .typeText("#developer-name", "John Smith")
    .click("#submit-button")

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector("#article-header").innerText)
    .eql("Thank you, John Smith!");
});

