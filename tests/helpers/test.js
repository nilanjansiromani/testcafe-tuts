import { Selector } from "testcafe";
import { enterName, typeComment, submitForm } from "./helper.js";

fixture`My Fixture`.page`https://devexpress.github.io/testcafe/example/`;

test("My Test", async (t) => {
  const name = "John Heart";

  await enterName(name);
  await typeComment("Here is what I think...");
  await submitForm();
  await t.expect(Selector("#article-header").textContent).contains(name);
});
