import Template from "../templates/template";
import { ITemplate } from "../types/index";
import Button from "../components/button";
import { onOpenModal } from "../utils/component-utils";
import {
  getUserTokenLocalStorage,
  removeUserLocalStorage,
} from "../utils/auth";

class Header {
  template: ITemplate;
  constructor() {
    this.template = new Template();
  }

  public draw(): void {
    const header: HTMLElement | null = document.querySelector("header");
    if (!header) {
      return;
    }
    header.textContent = "";
    const isAuth = getUserTokenLocalStorage();

    header.classList.add("header");
    if (isAuth) {
      header.append(this.createLogo(), this.createBtnSignOut());
    } else {
      header.append(this.createLogo(), this.createButtons());
    }
  }

  private createLogo(): HTMLElement {
    const logo: HTMLAnchorElement = this.template.createLink("logo", "/");
    const spanOne: HTMLElement = this.template.createElement(
      "span",
      "logo__content",
      "Women Workouts"
    );
    const spanTwo: HTMLElement = this.template.createElement(
      "span",
      "logo__content",
      "Women Workouts"
    );
    logo.append(spanOne, spanTwo);
    return logo;
  }

  private createButtons(): HTMLElement {
    const buttons: HTMLElement = this.template.createElement(
      "div",
      "header__buttons"
    );
    const btnSignIn: HTMLButtonElement = Button({
      content: "Sign In",
      className: ["header__btn"],
      onClick: onOpenModal("modal-sign-in"),
    });
    const btnSignUp: HTMLButtonElement = Button({
      content: "Sign Up",
      className: ["header__btn"],
      variant: "second",
      onClick: onOpenModal("modal-sign-up"),
    });

    buttons.append(btnSignIn, btnSignUp);
    return buttons;
  }

  private createBtnSignOut(): HTMLButtonElement {
    const btnSignOut: HTMLButtonElement = Button({
      content: "Sign Out",
      className: ["header__btn"],
      onClick: this.exitApp.bind(this),
    });
    return btnSignOut;
  }

  private exitApp() {
    removeUserLocalStorage();
    this.draw();
  }
}

export default Header;
