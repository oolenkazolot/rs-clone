import Template from "../templates/template";
import { ITemplate } from "../types/index";
import Complex from "../utils/сomplex.routes";
import { getUserIdLocalStorage } from "../utils/auth";
import { inActivePreloader } from "../utils/preloader";

class Congrats {
  template: ITemplate;
  container: HTMLElement;
  counter: number;
  time: number;

  constructor(counter: number, time: number) {
    this.template = new Template();
    this.container = this.template.createElement("div", "congrats");
    this.counter = counter;
    this.time = time;
  }

  public async draw() {
    await this.saveCompletedComplex();
    const congratsText: HTMLElement = this.template.createElement(
      "div",
      "congrats__text",
      "well done!"
    );

    const iconsBlock: HTMLElement = this.template.createElement(
      "div",
      "congrats__icons"
    );
    const exerciseBlock: HTMLElement = this.template.createElement(
      "div",
      "congrats__exercises-result"
    );
    const exerciseNumber: HTMLElement = this.template.createElement(
      "div",
      "congrats__exercises-number",
      `${this.counter}`
    );
    const exerciseText: HTMLElement = this.template.createElement(
      "div",
      "congrats__exercises-text",
      "Exercises"
    );
    exerciseBlock.append(exerciseNumber, exerciseText);

    const minutesBlock: HTMLElement = this.template.createElement(
      "div",
      "congrats__minutes-result"
    );
    const minutesNumber: HTMLElement = this.template.createElement(
      "div",
      "congrats__minutes-number",
      `${this.time}`
    );
    const minutesText: HTMLElement = this.template.createElement(
      "div",
      "congrats__minutes-text",
      "Minutes"
    );
    minutesBlock.append(minutesNumber, minutesText);
    iconsBlock.append(exerciseBlock, minutesBlock);

    const completeButton: HTMLAnchorElement = this.template.createLink(
      "congrats__button-complete",
      "/exercises",
      "Complete"
    );

    const finishSound = new Audio();
    finishSound.src = "../assets/sounds/finish.mp3";
    const sound = localStorage.getItem("sound");
    if (sound === "unmuted") {
      finishSound.play();
    }
    this.container.append(congratsText, iconsBlock, completeButton);
    return this.container;
  }

  async saveCompletedComplex() {
    const complex = new Complex();
    const userId1: string | undefined = getUserIdLocalStorage();
    if (!userId1) {
      return;
    }
    const complexId = localStorage.getItem("complexId");
    await complex.fulfilledComplex({
      userId: userId1,
      idComplex: JSON.parse(String(complexId)),
      time: String(this.time),
    });
  }
}

export default Congrats;
