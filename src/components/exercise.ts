import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";
import ExerciseModal from "../components/exerciseModal";
import ExerciseDetails from "./exerciseDetails";

class Exercise {
  template: ITemplate;
  container: HTMLElement;
  exercise: IExercise;
  flag: boolean;

  constructor(exercise: IExercise, flag: boolean) {
    this.template = new Template();
    this.container = this.template.createElement("div", "exercise");
    this.container.id = `${exercise.id}`;
    this.exercise = exercise;
    this.flag = flag;
  }

  public draw(): HTMLElement {
    const exerciseInfo: HTMLElement = this.template.createElement(
      "div",
      "exercise__info"
    );
    this.container.append(exerciseInfo);

    const exerciseName: HTMLElement = this.template.createElement(
      "p",
      "exercise__name",
      this.exercise.title
    );
    exerciseInfo.append(exerciseName);

    const exerciseQuantity: HTMLElement = this.template.createElement(
      "p",
      "exercise__quantity",
      this.exercise.quantity
    );
    exerciseInfo.append(exerciseQuantity);

    const exerciseGif: HTMLElement = this.template.createElement(
      "div",
      "exercise__gif"
    );
    this.container.append(exerciseGif);

    const img: HTMLImageElement = document.createElement("img");
    const path: string = this.exercise.example;
    img.src = path;
    exerciseGif.append(img);

    this.container.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.flag) {
        const exerciseDetails = new ExerciseDetails(this.exercise);
        exerciseDetails.draw(this.exercise, false);
      } else {
        const exerciseModal = new ExerciseModal(this.exercise);
        exerciseModal.draw();
      }
    });

    return this.container;
  }
}

export default Exercise;
