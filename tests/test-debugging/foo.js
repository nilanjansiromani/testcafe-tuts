// Test Speed
// TestCafe provides the capability to change test speed. Tests are executed at full speed with minimum delays between actions and assertions, which can make it hard to identify problems when a test is running.

// To slow down the test, use the --speed CLI flag. You can use values from 1 to 0.01.

// testcafe chrome ./my-tests --speed 0.1




// read :https://devexpress.github.io/testcafe/documentation/recipes/debugging/visual-studio-code.html


import { Selector } from "testcafe";

fixture("This is a test written in typescript").page(
  `https://devexpress.github.io/testcafe/example`
);

const innerText = "Thank you, John Smith!";

test("My first test", async (test) => {
  await test
  .debug
    .typeText("#developer-name", "John Smith")
    .click("#submit-button")

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector("#article-header").innerText)
    .eql(innerText);
});
