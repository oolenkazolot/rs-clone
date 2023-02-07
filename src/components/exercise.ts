import Template from "../templates/template";
import { ITemplate, IExercise } from "../types/index";

class Exercise {
	template: ITemplate;
	container: HTMLElement;
	exercise: IExercise;

  constructor(exercise: IExercise) {
		this.template = new Template();
		this.container = this.template.createElement("div", "exercise");
		this.container.id = `${exercise.id}`;
		this.exercise = exercise;
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

    return this.container;
  }
}

export default Exercise;