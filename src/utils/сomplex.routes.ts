import { IAnswerAddUserInfo } from "../types/index";

class Complex {
  public async createUserInfo(
    data: Record<string, string>
  ): Promise<IAnswerAddUserInfo | undefined> {
    try {
      const response = await fetch("http://localhost:5000/api/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res: IAnswerAddUserInfo = await response.json();
      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}

export default Complex;
