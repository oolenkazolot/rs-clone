import Template from "../templates/template";
import { ITemplate } from "../types/index";

class Congrats {
  template: ITemplate;
  container: HTMLElement;

  constructor() {
    this.template = new Template();
    this.container = this.template.createElement("div", "congrats");
  }

  public draw() {
    const congratsText: HTMLElement = this.template.createElement(
      "div",
      "congrats__text",
      "well done!"
    );
    const completeButton: HTMLAnchorElement = this.template.createLink(
      "congrats__button-complete",
      "/workouts",
      "Complete"
    );
    this.container.append(congratsText, completeButton);
    return this.container;
  }
}

export default Congrats;
