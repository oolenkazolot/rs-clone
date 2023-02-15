import {
  IRegistrationData,
  IAuthorizationData,
  IAnswerAuth,
  IAnswerAddUserInfo,
  IUserInfo,
} from "../types/index";

class Authorization {
  public async registration(
    data: IRegistrationData
  ): Promise<IAnswerAuth | undefined> {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res: IAnswerAuth = await response.json();
      console.log(res);

      if (res) {
        return res;
      }
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async authorization(
    data: IAuthorizationData
  ): Promise<IAnswerAuth | undefined> {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res: IAnswerAuth = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async addUserInfo(
    data: Record<string, string>
  ): Promise<IAnswerAddUserInfo | undefined> {
    try {
      const response = await fetch("http://localhost:5000/api/user/update", {
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

  public async getUserInfo(
    id: string
  ): Promise<Record<string, string> | undefined> {
    try {
      const response = await fetch(
        `http://localhost:5000/api/userInfo/get/${id}`
      );
      const res: Promise<
        Record<string, string> | undefined
      > = await response.json();
      console.log(res);

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}

export default Authorization;
