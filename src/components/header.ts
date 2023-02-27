import Template from "../templates/template";
import { ITemplate, IPreloader } from "../types/index";
import Button from "../components/Button";
import { onOpenModal } from "../utils/component-utils";
import router from "./routerComponent";
import {
  getUserTokenLocalStorage,
  removeUserLocalStorage,
} from "../utils/auth";
import Preloader from "../components/preloader";

class Header {
  template: ITemplate;
  mainClass: string;
  constructor() {
    this.template = new Template();
    this.mainClass = "header";
  }

  public draw(): void {
    const header: HTMLElement | null = document.querySelector("header");
    if (!header) {
      return;
    }
    header.textContent = "";
    const isAuth = getUserTokenLocalStorage();

    header.classList.add(`${this.mainClass}`);
    const wrap: HTMLElement = this.createWrap();
    if (isAuth) {
      wrap.append(this.createListMenu(), this.createBtnSignOut());
      header.append(this.createLogo(), wrap);
    } else {
      wrap.append(this.createButtons());
      header.append(this.createLogo(), wrap);
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
    logo.addEventListener("click", (e) => {
      this.onclickHandlerLogo(e);
    });
    return logo;
  }

  private onclickHandlerLogo(e: Event): void {
    e.preventDefault();
    router.navigate("");
    this.activePreloader();
  }

  private createButtons(): HTMLElement {
    const buttons: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__buttons`
    );
    const btnSignIn: HTMLButtonElement = Button({
      content: "Sign In",
      className: [`${this.mainClass}__btn`],
      onClick: onOpenModal("modal-sign-in"),
    });
    const btnSignUp: HTMLButtonElement = Button({
      content: "Sign Up",
      className: [`${this.mainClass}__btn`],
      variant: "second",
      onClick: onOpenModal("modal-sign-up"),
    });

    buttons.append(btnSignIn, btnSignUp);
    return buttons;
  }

  private createBtnSignOut(): HTMLButtonElement {
    const btnSignOut: HTMLButtonElement = Button({
      content: "Sign Out",
      className: [`${this.mainClass}__btn`],
      onClick: this.exitApp.bind(this),
    });
    return btnSignOut;
  }

  private createWrap(): HTMLElement {
    const wrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__wrap`
    );
    return wrap;
  }

  private createListMenu(): HTMLElement {
    const list: HTMLElement = this.template.createElement(
      "ul",
      `${this.mainClass}__list`
    );
    const linksMenu: HTMLElement[] = this.createLinksMenu();
    list.append(...linksMenu);
    return list;
  }

  private createLinksMenu(): HTMLElement[] {
    const linksMenu: HTMLElement[] = [];
    const nameLinksMenu = ["workouts", "exercises", "profile"];
    nameLinksMenu.forEach((nameLink) => {
      const listItem: HTMLElement = this.template.createElement(
        "li",
        `${this.mainClass}__list-item`
      );
      const link: HTMLAnchorElement = this.createLink(nameLink);
      listItem.append(link);
      linksMenu.push(listItem);
    });
    return linksMenu;
  }

  private createLink(name: string): HTMLAnchorElement {
    const link: HTMLAnchorElement = this.template.createLink(
      `${this.mainClass}__link`,
      "/",
      name
    );
    if (router.isActiveRout(name)) {
      link.classList.add("active");
    }
    link.addEventListener("click", (e) => {
      this.onClickHandlerLinkMenu(e, name);
    });
    link.append(this.createBorderLink());
    return link;
  }

  private createBorderLink(): HTMLElement {
    const borderLink: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__link-border`
    );
    return borderLink;
  }

  private onClickHandlerLinkMenu(e: Event, src: string) {
    e.preventDefault();
    this.activePreloader();

    router.navigate(src);
  }

  private exitApp(): void {
    removeUserLocalStorage();
    this.activePreloader();
    this.draw();
    router.navigate("");
  }

  private activePreloader(): void {
    document.body.classList.remove("loaded");

    setTimeout(function () {
      document.body.classList.add("loaded_hiding");
    }, 500);

    setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 800);
  }
}

export default Header;
