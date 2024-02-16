import { validatePassword } from "../services/validatePassword.js";

const req = {
  body: {
    password: "Test@1234",
  },
};

const res = {
  sendStatus: jest.fn(),
};

test("Validating password with all criteria", async () => {
  await validatePassword(req, res);
  expect(res.sendStatus).toHaveBeenCalledWith(200);
});

test("Invalidating password without special character", async () => {
  req.body.password = "Test1234";
  await validatePassword(req, res);
  expect(res.sendStatus).toHaveBeenCalledWith(400);
});
