import { filterObject } from "./utils";

test("Returns an obj with specific propierties of another obj", () => {
  const obj = {
    name: "Brahian Elias",
    lastName: "Soto Mercedes",
    age: "old",
    work: "programing",
    hobbies: "programing"
  };

  expect(filterObject(null)).toBe(null);
  expect(filterObject(obj, null)).toBe(obj);
  expect(Object.keys(filterObject(obj, ["name"])).length).toBe(1);
  expect(Object.keys(filterObject(obj, [])).length).toBe(0);
});
