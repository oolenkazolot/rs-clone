import { IRouter, IAuthorization } from "../types/index";
import Authorization from "../utils/auth.routes";
// import logo from '../assets/png/img1.png';

class MainPage {
  public authorization: IAuthorization;
  public router?: IRouter;

  constructor() {
    this.authorization = new Authorization();
  }

  public draw(): void {
    const mainElement: HTMLElement | null = document.querySelector("main");
    if (!mainElement) {
      return;
    }
    mainElement.classList.add("main");

    // mainElement.textContent = '';
    const mainPageElement: HTMLElement = document.createElement("div");
    mainPageElement.classList.add("main-page");
    mainElement.append(mainPageElement);
    // this.registr();
  }

  // private async registr(): Promise<void> {
  //   const res = await this.authorization.registration({ email: 'oolenka.zolot@gmail.com', password: 'gggggggg' });
  //   console.log(res);
  // }
}

export default MainPage;
