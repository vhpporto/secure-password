export const isValidPassword = (password) => {
  if (!hasMinLength(password)) {
    return "Password must have at least 8 characters.";
  }

  if (!hasUpperCase(password)) {
    return "Password must have at least one uppercase letter.";
  }

  if (!hasLowerCase(password)) {
    return "Password must have at least one lowercase letter.";
  }

  if (!hasDigit(password)) {
    return "Password must have at least one digit.";
  }

  if (!hasSpecialCharacter(password)) {
    return "Password must have at least one special character.";
  }
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
