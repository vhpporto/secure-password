import { isValidPassword } from "../utils/isValidPassword.js";

describe("isValidPassword", () => {
  test("returns error message if password does not meet minimum length requirement", () => {
    const result = isValidPassword("short");
    expect(result).toBe("Password must have at least 8 characters.");
  });

  test("returns error message if password does not have at least one uppercase letter", () => {
    const result = isValidPassword("nouppercase");
    expect(result).toBe("Password must have at least one uppercase letter.");
  });

  test("returns error message if password does not have at least one lowercase letter", () => {
    const result = isValidPassword("NOLOWERCASE");
    expect(result).toBe("Password must have at least one lowercase letter.");
  });

  test("returns error message if password does not have at least one digit", () => {
    const result = isValidPassword("NoDigitPassword");
    expect(result).toBe("Password must have at least one digit.");
  });

  test("returns error message if password does not have at least one special character", () => {
    const result = isValidPassword("NoSpecialCharacter123");
    expect(result).toBe("Password must have at least one special character.");
  });

  test("returns undefined if password meets all requirements", () => {
    const result = isValidPassword("ValidP@ssword123");
    expect(result).toBeUndefined();
  });
});
