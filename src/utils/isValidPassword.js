export const isValidPassword = (password) => {
  return (
    hasMinLength(password) &&
    hasUpperCase(password) &&
    hasLowerCase(password) &&
    hasDigit(password) &&
    hasSpecialCharacter(password)
  );
};

function hasMinLength(password) {
  return password.length >= 8;
}

function hasUpperCase(password) {
  return /[A-Z]/.test(password);
}

function hasLowerCase(password) {
  return /[a-z]/.test(password);
}

function hasDigit(password) {
  return /\d/.test(password);
}

function hasSpecialCharacter(password) {
  return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
}
