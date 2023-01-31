import { IRouter } from "../types/index";

class MainPage {
  public router?: IRouter;

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    mainElement.textContent = "";
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("main-page");
    mainElement.append(mainPageElement);
  }
}

export default MainPage;
