import Modal from "../components/modal";
import Template from "../templates/template";
import { IModal, ITemplate } from "../types/index";
import { Input } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import Button from "../components/button";
import { onCloseModal, onOpenModal } from "../utils/component-utils";

class ModalSignIn {
  template: ITemplate;
  modal: IModal;
  mainClass: string;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "login-form";
  }

  public draw(): void {
    const loginForm: HTMLElement = this.createLoginForm();
    const modal: HTMLElement = this.modal.createModal(
      "modal-sign-in",
      loginForm
    );
    document.body.append(modal);
  }

  private createLoginForm(): HTMLElement {
    const loginForm: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    const title: HTMLElement = this.createTitle();
    const form: HTMLElement = this.createForm();
    const question: HTMLElement = this.createQuestion();
    loginForm.append(title, form, question);
    return loginForm;
  }

  private createTitle(): HTMLElement {
    const title: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      "Log in"
    );
    return title;
  }

  private createForm() {
    const form: HTMLFormElement = this.template.createForm(
      `${this.mainClass}__form`,
      "/"
    );
    const inputBlockEmail: HTMLElement = Input({
      className: [],
      attributes: {
        type: "text",
        placeholder: "Enter your email",
        name: "email",
        required: "true",
      },
      classNameIcon: "icon-mail_outline",
    });
    const inputBlockPassword: HTMLElement = PasswordInput();
    const btnWrap: HTMLElement = this.createBtnWrap();
    form.append(inputBlockEmail, inputBlockPassword, btnWrap);
    return form;
  }

  private createBtnWrap(): HTMLElement {
    const mainClass = "btn-wrap";
    const btnWrap: HTMLElement = this.template.createElement("div", mainClass);
    const btn: HTMLButtonElement = Button({
      content: "Sign In",
      className: [`${mainClass}__btn`],
      type: "submit",
    });
    btnWrap.append(btn);
    return btnWrap;
  }

  private createQuestion(): HTMLElement {
    const question: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__question`
    );
    const questionContent: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__text`,
      "Don't have an account?"
    );
    const linkSignUp: HTMLAnchorElement = this.template.createLink(
      `${this.mainClass}__link`,
      "#",
      "Sing up"
    );
    linkSignUp.onclick = onOpenModal("modal-sign-up", "modal-sign-in");
    question.append(questionContent, linkSignUp);
    return question;
  }
}

export default ModalSignIn;
