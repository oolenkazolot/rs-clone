import { IExercise, ITemplate } from "../types";
import Template from "../templates/template";
import { volume, settings, arrowLeft, tv } from "../components/svg";

class TakeARest {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  draw(index: number, exerciseArray: IExercise[]): HTMLElement {
    const modal: HTMLElement = this.template.createElement(
      "div",
      "exercisesModals"
    );
    document.body.append(modal);
    modal.append(this.createTakeARest(exerciseArray, index));
    return modal;
  }

  createTakeARest(exercises: IExercise[], i: number): HTMLElement {
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "rest__wrapper"
    );
    wrapper.append(
      this.createSetiingsCont(),
      this.createTitle(),
      this.createCountDown(30),
      this.createButtons(),
      this.nextExerciseText(exercises, i),
      this.createNextExerciseWrapper(exercises, i)
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
    addButton.addEventListener("click", () => {
      this.addSeconds();
    });
    return buttons;
  }

  private nextExerciseText(exercises: IExercise[], i: number): HTMLElement {
    const text: HTMLElement = this.template.createElement("p", "rest__text");
    text.innerHTML = `next exercise ${i + 2} / ${exercises.length}`;
    return text;
  }

  private createNextExerciseWrapper(
    exercises: IExercise[],
    i: number
  ): HTMLElement {
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "rest__exerc-wrapper"
    );
    wrapper.append(
      this.nextExercTitle(exercises, i),
      this.createNextExerciseInfo(exercises, i)
    );
    return wrapper;
  }

  private nextExercTitle(exercises: IExercise[], i: number): HTMLElement {
    const wrapper: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__cont"
    );
    const exerciseTitle: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__title"
    );
    exerciseTitle.innerHTML = `${exercises[i + 1].title} ${
      exercises[i + 1].quantity
    }`;
    const linkEl: HTMLElement = this.template.createLink(
      "next-exercise__link",
      exercises[i + 1].youtube
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

  private createNextExerciseInfo(
    exercises: IExercise[],
    i: number
  ): HTMLElement {
    const infoWrappper: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__info"
    );
    const imgWrapper: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__img-wrapper"
    );
    const gif: HTMLImageElement = this.template.createImage(
      exercises[i + 1].example,
      "exercise",
      "next-exercise__gif"
    );
    imgWrapper.append(gif);
    const description: HTMLElement = this.template.createElement(
      "div",
      "next-exercise__description",
      exercises[i + 1].description
    );

    description.innerHTML = exercises[i + 1].description.replace(
      /\. /g,
      ". <br><span class='new-line'></span>"
    );
    infoWrappper.append(imgWrapper, description);
    return infoWrappper;
  }

  private createCountDown(seconds: number): HTMLElement {
    const timer: HTMLElement = this.template.createElement(
      "div",
      "rest__timer"
    );
    const timerLineBefore: HTMLElement = this.template.createElement(
      "div",
      "rest__timer-line-before"
    );
    const timerLine: HTMLElement = this.template.createElement(
      "div",
      "rest__timer-line"
    );
    const timerLineAfter: HTMLElement = this.template.createElement(
      "div",
      "rest__timer-line-after"
    );
    const timerBody: HTMLElement = this.template.createElement(
      "div",
      "rest__timer-body"
    );
    timerBody.innerHTML = "30";
    this.countSeconds(timerBody, timer);
    timer.append(timerLineBefore, timerLine, timerLineAfter, timerBody);
    return timer;
  }

  private countSeconds(element: HTMLElement, element2: HTMLElement): void {
    const int = setInterval(() => {
      if (Number(element.innerHTML) > 0) {
        element.innerHTML = String(Number(element.innerHTML) - 1);
        if (Number(element.innerHTML) === 0) {
          element2.style.display = "none";
        }
      }
    }, 1000);
    setTimeout(() => {
      const skipBtn = document.querySelector(".rest__skip-btn") as HTMLElement;
      skipBtn.addEventListener("click", () => {
        clearInterval(int);
      });
    }, 0);
  }

  private addSeconds(): void {
    const timerBody = document.querySelector(
      ".rest__timer-body"
    ) as HTMLElement;

    timerBody.innerHTML = String(Number(timerBody.innerHTML) + 20);
    const timerLine = document.querySelector(
      ".rest__timer-line"
    ) as HTMLElement;
    const before = document.querySelector(
      ".rest__timer-line-before"
    ) as HTMLElement;

    const prevStyle = window.getComputedStyle(timerLine).animation;
    const regexp = /\d{2,}/g;
    const prevVal = prevStyle.match(regexp);
    const after = document.querySelector(
      ".rest__timer-line-after"
    ) as HTMLElement;
    if (prevVal) {
      after.style.animation = `overlay_right ${
        Number(prevVal[0]) + 20
      }s steps(1, end) forwards`;
      before.style.animation = `overlay_left ${
        Number(prevVal[0]) + 20
      }s steps(1, end) forwards`;
      timerLine.style.animation = `rotate ${
        Number(prevVal[0]) + 20
      }s linear forwards`;
    }
  }
}

export default TakeARest;
