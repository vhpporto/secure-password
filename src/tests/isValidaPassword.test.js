import { isValidPassword } from "../utils/isValidPassword.js";

test("Valid password with all criteria", () => {
  const password = "Test@1234";
  expect(isValidPassword(password)).toBe(true);
});

test("Invalid password without special character", () => {
  const password = "Test1234";
  expect(isValidPassword(password)).toBe(false);
});

test("Invalid password without uppercase letter", () => {
  const password = "test@1234";
  expect(isValidPassword(password)).toBe(false);
});
