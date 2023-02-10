import { ITemplate, IExercise } from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";
import trainingsData from "../utils/trainings-data-en";

class AddNewComplex {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  showExercises(): HTMLElement {
    const exercisesWrapper = this.template.createElement(
      "div",
      "exercises-wrapper"
    );
    for (let i = 0; i < workout_plans.length; i++) {
      for (let j = 0; j < workout_plans[i].block.length; j++) {
        for (let k = 0; k < workout_plans[i].block[j].exercises.length; k++) {
          const exercWrapper = this.template.createElement(
            "div",
            "wrap-exercise"
          );
          const exerciseData = workout_plans[i].block[j].exercises[k];
          const exercise = new Exercise(exerciseData).draw();
          exercWrapper.append(exercise);
          exercisesWrapper.append(exercWrapper);
          const button = this.template.createBtn("add-exerc-btn", "add");
          button.setAttribute(
            "id",
            `${i} ${j} ${workout_plans[i].block[j].exercises[k].id}`
          );
          button.addEventListener("click", () => {
            console.log(workout_plans[i].block[j]);
          });
          exercWrapper.append(button);
        }
      }
    }
    return exercisesWrapper;
  }

  createExercisesArray(addBtn: HTMLElement) {
    const matrix: string | null = addBtn.getAttribute("id");
    const i = matrix?.split(" ")[0];
    const j = matrix?.split(" ")[1];
    const k = matrix?.split(" ")[2];
    console.log(i, j, k);
  }
}

export default AddNewComplex;
