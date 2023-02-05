import { IValidate } from "../types/index";

export function isEmailValid(email: string): IValidate {
  const emailRegexp = /.+@.+\..+/i;
  if (!emailRegexp.test(email)) {
    return {
      res: false,
      message: "Please enter a valid email",
    };
  }
  return {
    res: true,
  };
}

export function isPasswordValid(password: string): IValidate {
  if (password.length < 6) {
    return {
      res: false,
      message: "Password must not be less than 6 characters",
    };
  }

  if (password.includes(" ")) {
    return {
      res: false,
      message: "Password must not contain spaces",
    };
  }
  return {
    res: true,
  };
}
