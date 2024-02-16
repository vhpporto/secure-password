import { isValidPassword } from "../utils/isValidPassword.js";

export const validatePassword = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.sendStatus(400);
    }

    const result = isValidPassword(password);

    if (!result) {
      return res.sendStatus(400);
    }

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
};
