import {
  IAnswerAddUserInfo,
  IDataComplex,
  ICreateExercise,
  IServerExercises,
  ICompletedComplexesReceived,
  IFulfilledComplexReturned,
  IWeeklyStat,
  IUserSettings,
} from "../types/index";

class Complex {
  public async createUserInfo(
    data: Record<string, string>
  ): Promise<IAnswerAddUserInfo | undefined> {
    try {
      const response = await fetch(
        "https://rs-clone-back-production-b4b7.up.railway.app/api/complex/create",
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

  public async getComplex(id: string): Promise<IDataComplex[] | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/complex/get-all/${id}`
      );
      const res: Promise<IDataComplex[] | undefined> = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async deleteComplex(id: string) {
    try {
      await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/complex/delete/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async createExercise(
    data: Record<string, string>
  ): Promise<ICreateExercise | undefined> {
    try {
      const response = await fetch(
        "https://rs-clone-back-production-b4b7.up.railway.app/api/exercise/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res: ICreateExercise = await response.json();
      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async getExercises(
    id: string
  ): Promise<IServerExercises[] | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/exercise/get-all/${id}`
      );
      const res: Promise<
        IServerExercises[] | undefined
      > = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async deleteExercise(id: string) {
    try {
      await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/exercise/delete/${id}`,
        {
          method: "DELETE",
        }
      );
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async updateExercise(
    id: string,
    data: Record<string, string>
  ): Promise<ICreateExercise | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/exercise/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res: ICreateExercise = await response.json();
      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async fulfilledComplex(
    data: Record<string, string>
  ): Promise<IFulfilledComplexReturned | undefined> {
    try {
      const response = await fetch(
        "https://rs-clone-back-production-b4b7.up.railway.app/api/completed/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res: IFulfilledComplexReturned = await response.json();
      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async getCompletedComplexes(
    id: string
  ): Promise<ICompletedComplexesReceived | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/completed/get-all/${id}`
      );
      const res: Promise<
        ICompletedComplexesReceived | undefined
      > = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async getWeeklyStatistic(
    id: string
  ): Promise<IWeeklyStat | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/completed/weekly-workouts/${id}`
      );
      const res: Promise<IWeeklyStat | undefined> = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async getUserSettings(id: string): Promise<IUserSettings | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/user/get/${id}`
      );
      const res: Promise<IUserSettings | undefined> = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async updateRestTime(
    id: string,
    data: {
      timeRest: string;
    }
  ): Promise<IUserSettings | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/user/update-rest/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res: IUserSettings = await response.json();
      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public async updateLoad(
    id: string,
    data: {
      load: string;
    }
  ): Promise<IUserSettings | undefined> {
    try {
      const response = await fetch(
        `https://rs-clone-back-production-b4b7.up.railway.app/api/user/update-load/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res: IUserSettings = await response.json();
      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}

export default Complex;
