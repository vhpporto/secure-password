import { isValidPassword } from "../utils/isValidPassword.js";

export const validatePassword = async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: "Password is required." });
    }

    const errors = isValidPassword(password);

    if (errors) {
      return res.status(400).json({ messsage: errors });
    }

    return res.sendStatus(200);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
};
