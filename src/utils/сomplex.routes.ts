import {
  IAnswerAddUserInfo,
  IDataComplex,
  ICreateExercise,
  IServerExercises,
  ICompletedComplexesReceived,
  IFulfilledComplexReturned,
  IWeeklyStat,
} from "../types/index";

class Complex {
  public async createUserInfo(
    data: Record<string, string>
  ): Promise<IAnswerAddUserInfo | undefined> {
    try {
      const response = await fetch("http://localhost:5000/api/complex/create", {
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

  public async getComplex(id: string): Promise<IDataComplex[] | undefined> {
    try {
      const response = await fetch(
        `http://localhost:5000/api/complex/get-all/${id}`
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
      await fetch(`http://localhost:5000/api/complex/delete/${id}`, {
        method: "DELETE",
      });
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
        "http://localhost:5000/api/exercise/create",
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
        `http://localhost:5000/api/exercise/get-all/${id}`
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
      await fetch(`http://localhost:5000/api/exercise/delete/${id}`, {
        method: "DELETE",
      });
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
        `http://localhost:5000/api/exercise/update/${id}`,
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
        "http://localhost:5000/api/completed/create",
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
        `http://localhost:5000/api/completed/get-all/${id}`
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
        `http://localhost:5000/api/completed/weekly-workouts/${id}`
      );
      const res: Promise<IWeeklyStat | undefined> = await response.json();

      return res;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}

export default Complex;
