import Template from "../templates/template";
import ModalMobileMenu from "../components/modalMobileMenu";
import { ITemplate, IModalMobileMenu } from "../types/index";
import Button from "../components/Button";
import { onOpenModal } from "../utils/component-utils";
import router from "./routerComponent";
import {
  getUserTokenLocalStorage,
  removeUserLocalStorage,
} from "../utils/auth";

class Header {
  template: ITemplate;
  mainClass: string;
  modalMobileMenu: IModalMobileMenu;
  constructor() {
    this.template = new Template();
    this.mainClass = "header";
    this.modalMobileMenu = new ModalMobileMenu();
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
      wrap.append(
        this.createListMenu(),
        this.createModal(),
        this.createBtnSignOut(),
        this.createBurgerBtn()
      );
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
    const spanThree: HTMLElement = this.template.createElement(
      "span",
      "logo__mobile",
      "WW"
    );
    logo.append(spanOne, spanTwo, spanThree);
    logo.addEventListener("click", (e) => {
      this.onclickHandlerLogo(e);
    });
    return logo;
  }

  private onclickHandlerLogo(e: Event): void {
    e.preventDefault();
    router.navigate("");
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

  private createModal(): HTMLElement {
    const modal: HTMLElement = this.modalMobileMenu.createModal(
      "modal-mobile",
      this.createVerticalMenu(),
      true
    );
    return modal;
  }

  private createWrap(): HTMLElement {
    const wrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__wrap`
    );
    return wrap;
  }

  private createBurgerBtn(): HTMLElement {
    const btn: HTMLElement = this.template.createElement(
      "button",
      `${this.mainClass}__mobile-btn`
    );
    btn.addEventListener("click", () => {
      onOpenModal("modal-mobile")();
    });
    const icon: HTMLElement = this.template.createIcon(
      `${this.mainClass}__mobile-icon`,
      "icon-burger-btn"
    );
    btn.append(icon);
    return btn;
  }

  private createVerticalMenu(): HTMLElement {
    const mainClass = "vertical-menu";
    const verticalMenu: HTMLElement = this.template.createElement(
      "div",
      `${mainClass}`
    );
    verticalMenu.append(this.createListMenu());
    return verticalMenu;
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
    router.navigate(src);
  }

  private exitApp(): void {
    removeUserLocalStorage();
    this.draw();
    router.navigate("");
  }
}

export default Header;
