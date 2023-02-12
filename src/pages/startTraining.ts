import Template from "../templates/template";
import { IRouter, ITemplate } from "../types/index";
import TakeARest from "../components/takeaRest";

class StartTrainingPage {
  template: ITemplate;
  public router?: IRouter;
  takeARest;
  constructor() {
    this.template = new Template();
    this.takeARest = new TakeARest();
  }

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("startTraining-page");
    mainPageElement.append(this.takeARest.draw());
    mainElement.append(mainPageElement);
  }
}

export default StartTrainingPage;
