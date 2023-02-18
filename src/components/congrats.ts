import Template from "../templates/template";
import { ITemplate } from "../types/index";

class Congrats {
  template: ITemplate;
  container: HTMLElement;
  counter: number;

  constructor(counter: number) {
    this.template = new Template();
    this.container = this.template.createElement("div", "congrats");
    this.counter = counter;
  }

  public draw(): HTMLElement {
    const congratsText: HTMLElement = this.template.createElement(
      "div",
      "congrats__text",
      "well done!"
    );
    const resultBlock: HTMLElement = this.template.createElement(
      "div",
      "congrats__result"
    );
    const exerciseNumber: HTMLElement = this.template.createElement(
      "div",
      "congrats__number",
      `${this.counter}`
    );
    const exerciseText: HTMLElement = this.template.createElement(
      "div",
      "congrats__exercises",
      "Exercises"
    );
    resultBlock.append(exerciseNumber, exerciseText);
    const completeButton: HTMLAnchorElement = this.template.createLink(
      "congrats__button-complete",
      "/workouts",
      "Complete"
    );
    this.container.append(congratsText, resultBlock, completeButton);
    return this.container;
  }
}

export default Congrats;
