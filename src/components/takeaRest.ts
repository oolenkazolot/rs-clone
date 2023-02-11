import { IExercise, ITemplate } from "../types";
import Template from "../templates/template";
import workout_plans from "../utils/workout-plans-en";
import Exercise from "./exercise";
import { volume, settings, arrowLeft, tv } from "../components/svg";

class TakeARest {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  draw(): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "take-a-rest"
    );
    document.body.append(modal);
    modal.append(this.createWrapper());
    return modal;
  }

  createWrapper(): HTMLElement {
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "rest__wrapper"
    );
    wrapper.append(
      this.createSetiingsCont(),
      this.createTitle(),
      this.createButtons(),
      this.nextExerciseText(2, 19),
      this.createNextExerciseWrapper()
    );
    return wrapper;
  }

  createSetiingsCont(): HTMLElement {
    const header: HTMLElement = this.template.createElement(
      "div",
      "rest__header"
    );
    const arrow: HTMLElement = this.template.createElement(
      "div",
      "rest__arrow-left"
    );
    arrow.innerHTML = arrowLeft;
    const settingsCont: HTMLElement = this.template.createElement(
      "div",
      "rest__settings-cont"
    );
    const image: HTMLElement = this.template.createElement(
      "div",
      "rest__volume"
    );
    image.innerHTML = volume;
    const settingsEl: HTMLElement = this.template.createElement(
      "div",
      "rest__settings"
    );
    settingsEl.innerHTML = settings;
    settingsCont.append(image, settingsEl);
    header.append(arrow, settingsCont);
    return header;
  }

  private createTitle(): HTMLElement {
    const title: HTMLElement = this.template.createElement(
      "h2",
      "rest__title",
      "take a rest"
    );
    return title;
  }

  private createButtons(): HTMLElement {
    const buttons: HTMLElement = this.template.createElement(
      "div",
      "rest__buttons"
    );
    const addButton: HTMLButtonElement = this.template.createBtn(
      "rest__add-btn",
      "+20"
    );
    addButton.classList.add("exercises__startNow-btn");
    const skipButton: HTMLButtonElement = this.template.createBtn(
      "rest__skip-btn",
      "skip"
    );
    skipButton.classList.add("exercises__startNow-btn");
    buttons.append(addButton, skipButton);
    return buttons;
  }

  private nextExerciseText(current: number, length: number): HTMLElement {
    const text: HTMLElement = this.template.createElement("p", "rest__text");
    text.innerHTML = `next exercise ${current} / ${length}`;
    return text;
  }

  private createNextExerciseWrapper(): HTMLElement {
    const exercise: IExercise = workout_plans[0].block[0].exercises[0];
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "rest__exerc-wrapper"
    );
    wrapper.append(
      this.nextExercTitle(exercise),
      this.createNextExerciseInfo(exercise)
    );
    return wrapper;
  }

  private nextExercTitle(exercise: IExercise): HTMLElement {
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__cont"
    );
    const exerciseTitle: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__title"
    );
    exerciseTitle.innerHTML = `${exercise.title} ${exercise.quantity}`;
    const linkEl: HTMLElement = this.template.createLink(
      "next-exercise__link",
      exercise.youtube
    );
    const tvEl: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__tv"
    );
    linkEl.append(tvEl);
    tvEl.innerHTML = tv;
    wrapper.append(exerciseTitle, linkEl);
    return wrapper;
  }

  private createNextExerciseInfo(exercise: IExercise): HTMLElement {
    const infoWrappper: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__info"
    );
    const imgWrapper: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__img-wrapper"
    );
    const gif: HTMLImageElement = this.template.createImage(
      exercise.example,
      "exercise",
      "next-exercise__gif"
    );
    imgWrapper.append(gif);
    const description: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__description",
      exercise.description
    );

    description.innerHTML = exercise.description.replace(
      /\. /g,
      ". <br><span class='new-line'></span>"
    );
    infoWrappper.append(imgWrapper, description);
    return infoWrappper;
  }
}

export default TakeARest;
