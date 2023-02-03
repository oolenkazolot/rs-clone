import { IRegistrationData } from "../types/index";

class Authorization {
  public async registration(data: IRegistrationData): Promise<void> {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      if (res) {
        return res;
      }
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}

export default Authorization;