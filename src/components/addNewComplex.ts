import {
  ITemplate,
  ISingleTraining,
  IWorkoutPlan,
  IDataComplex,
} from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";
import ExerciseDetails from "./exerciseDetails";
import { getUserIdLocalStorage } from "../utils/auth";
import Complex from "../utils/сomplex.routes";
import trainingsData from "../utils/trainings-data-en";

class AddNewComplex {
  template: ITemplate;
  complex;

  constructor() {
    this.template = new Template();
    this.complex = new Complex();
  }

  showExercises(): HTMLElement {
    const exercisesWrapper = this.template.createElement(
      "div",
      "exercises-wrapper"
    );
    for (let i = 0; i < trainingsData.trainings.length; i++) {
      const exercWrapper = this.template.createElement("div", "wrap-exercise");
      const exerciseData = trainingsData.trainings[i];
      const exercise = new Exercise(exerciseData, false).draw();
      exercWrapper.append(exercise);
      exercisesWrapper.append(exercWrapper);
      const button = this.template.createBtn("add-exerc-btn", "add");
      button.addEventListener("click", () => {
        const exerciseDetails = new ExerciseDetails(exerciseData);
        exerciseDetails.draw(trainingsData.trainings[i]);
      });
      exercWrapper.append(button);
    }
    return exercisesWrapper;
  }

  createExercisesArray(addBtn: HTMLElement) {
    const matrix: string | null = addBtn.getAttribute("id");
    const i = matrix?.split(" ")[0];
    const j = matrix?.split(" ")[1];
    const k = matrix?.split(" ")[2];
  }

  createComplexNameModal(): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "complex-name-overlay"
    );
    const main: HTMLElement = document.querySelector(".main") as HTMLElement;
    main.append(modal);
    return modal;
  }

  async addComplexInLocalStore() {
    const input: HTMLInputElement = document.querySelector(
      ".modal-addNewComplex__input"
    ) as HTMLInputElement;
    const dataInStorage: IWorkoutPlan[] = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );

    let newBlock: ISingleTraining;
    if (dataInStorage.length) {
      newBlock = {
        id: dataInStorage[0].block[dataInStorage[0].block.length - 1].id + 1,
        title: input.value || "no name",
        exercisesAmt: "0",
        exercisesTime: "0",
        image: "../assets/png/whole_body2.png",
        color:
          "linear-gradient(90deg, rgb(241, 147, 215) 0%, rgb(245, 237, 238) 100%)",
        exercises: [],
      };
    } else {
      newBlock = {
        id: 12,
        title: input.value || "no name",
        exercisesAmt: "0",
        exercisesTime: "0",
        image: "../assets/png/whole_body2.png",
        color:
          "linear-gradient(90deg, rgb(241, 147, 215) 0%, rgb(245, 237, 238) 100%)",
        exercises: [],
      };
    }
    let data: IWorkoutPlan[];

    if (dataInStorage.length) {
      dataInStorage[0].block.push(newBlock);
      data = dataInStorage;
    } else {
      data = [
        {
          title: "Workouts you created",
          image: "",
          block: [newBlock],
        },
      ];
    }
    localStorage.setItem("workoutPlans", JSON.stringify(data));

    const userId1: string | undefined = getUserIdLocalStorage();
    if (!userId1) {
      return;
    }
    await this.complex.createUserInfo({
      userId: userId1,
      name: input.value || "no name",
    });
  }

  addExerciseInLocalStorage(exercId: number): void {
    const dataInStorage: IWorkoutPlan[] = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const id = localStorage.getItem("complexId");

    for (let i = 0; i < dataInStorage[0].block.length; i++) {
      const comlex = dataInStorage[0].block[i];
      if (String(comlex.id) === id) {
        dataInStorage[0].block[i].exercises.push(
          trainingsData.trainings[exercId - 1]
        );
      }
    }
    localStorage.setItem("workoutPlans", JSON.stringify(dataInStorage));
  }

  deleteExerciseFromLocalStorage(exercId: number): void {
    const dataInStorage: IWorkoutPlan[] = JSON.parse(
      localStorage.getItem("workoutPlans") || "[]"
    );
    const id = localStorage.getItem("complexId");
    for (let i = 0; i < dataInStorage[0].block.length; i++) {
      const comlex = dataInStorage[0].block[i];
      if (String(comlex.id) === id) {
        const exercises = dataInStorage[0].block[i].exercises;
        exercises.forEach((el, index) => {
          if (el.id === exercId) {
            console.log(el.id);
            exercises.splice(index, 1);
          }
        });
      }
    }
    localStorage.setItem("workoutPlans", JSON.stringify(dataInStorage));
  }

  createSelectExercises(): HTMLElement {
    const text: HTMLElement = this.template.createElement(
      "div",
      "singl-train__empty-text",
      "Select An Exercise"
    );
    return text;
  }

  async getComplexes() {
    const userId1: string | undefined = getUserIdLocalStorage();
    if (!userId1) {
      return;
    }
    const result = await this.complex.getComplex(userId1);
    return result;
  }

  async creatingArrayFromData() {
    const data = await this.getComplexes();
    if (data) {
      const a = data[0];
    }
    const array: IWorkoutPlan[] = [
      {
        title: "Workouts you created",
        image: "",
        block: [],
      },
    ];
    if (data !== undefined) {
      for (let i = 0; i < Number(data.length); i++) {
        const elem: ISingleTraining = {
          id: 12 + i,
          title: "kjh;kj",
          exercisesAmt: "0",
          exercisesTime: "0",
          image: "../assets/png/whole_body2.png",
          color:
            "linear-gradient(90deg, rgb(241, 147, 215) 0%, rgb(245, 237, 238) 100%)",
          exercises: [],
        };
        array[0].block.push(elem);
      }
    }
  }
}

export default AddNewComplex;
