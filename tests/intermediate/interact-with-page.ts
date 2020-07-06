import { Selector } from "testcafe";

fixture`page interactions`.page`https://devexpress.github.io/testcafe/example/`;

test("Click test", async (t) => {
  const selectBasedOnText = Selector("label").withText("I have tried TestCafe");

  await t.click(selectBasedOnText);
});

test("Press Key test", async (t) => {
  await t
    .click("#tried-test-cafe")
    // pressing 'Space' imitates clicking the checkbox again
    .pressKey("space");
});

test("Type Text test", async (t) => {
  await t.typeText("#developer-name", "John Doe");
});

test("Select Text test", async (t) => {
  await t
    .typeText("#developer-name", "John Doe")
    .selectText("#developer-name")
    .pressKey("delete");
});

// this will fail intentionally
test("Hover test", async (t) => {
  await t.hover(".map-container");
});
