import {
  IRegistrationData,
  IAuthorizationData,
  IAnswerAuth,
  IAnswerAddUserInfo,
  IDataEditProfile,
} from "../types/index";

class Authorization {
  public async registration(
    data: IRegistrationData
  ): Promise<IAnswerAuth | undefined> {
    try {
      const response = await fetch(
        "https://rs-clone-back-production-b4b7.up.railway.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res: IAnswerAuth = await response.json();

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
      const response = await fetch(
        "https://rs-clone-back-production-b4b7.up.railway.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const res: IAnswerAuth = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async createUserInfo(
    data: Record<string, string>
  ): Promise<IAnswerAddUserInfo | undefined> {
    try {
      const response = await fetch(
        "https://rs-clone-back-production-b4b7.up.railway.app/api/user/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
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
        `https://rs-clone-back-production-b4b7.up.railway.app/api/user/get/${id}`
      );
      const res: Promise<
        Record<string, string> | undefined
      > = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async updateUserInfo(
    dataEditProfile: IDataEditProfile
  ): Promise<IAnswerAddUserInfo | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/user/update/${dataEditProfile.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            weight: dataEditProfile.weight,
            height: dataEditProfile.height,
          }),
        }
      );
      const res: IAnswerAddUserInfo | undefined = await response.json();

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
