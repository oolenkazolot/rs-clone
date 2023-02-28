import { log } from "console";
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

export function isHeightValid(height: string, units: string): IValidate {
  // переводит дюймы в см
  const valueHeight: number =
    units === "inches" ? Number(height) * 2.54 : Number(height);

  if (valueHeight < 50 || valueHeight > 600) {
    return {
      res: false,
      message: "Enter the correct height",
    };
  }

  return {
    res: true,
  };
}

export function isWeightValid(weight: string, units: string): IValidate {
  // переводит фунты в кг
  const valueWeight: number =
    units === "Lbs" ? Number(weight) * 0.45 : Number(weight);

  if (valueWeight < 1 || valueWeight > 1500) {
    return {
      res: false,
      message: "Enter the correct weight",
    };
  }

  return {
    res: true,
  };
}
