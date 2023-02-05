import Modal from "../components/modal";
import Template from "../templates/template";
import {
  IModal,
  ITemplate,
  IAuthorization,
  IAnswerAuth,
  IHeader,
} from "../types/index";
import { Input } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import Button from "../components/button";
import { onOpenModal, onCloseModal } from "../utils/component-utils";
import { isEmailValid } from "../utils/validate";
import Authorization from "../utils/auth.routes";
import Header from "../components/header";
import { setUserLocalStorage } from "../utils/auth";

class ModalSignUp {
  template: ITemplate;
  modal: IModal;
  mainClass: string;
  authorization: IAuthorization;
  header: IHeader;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "registration-form";
    this.authorization = new Authorization();
    this.header = new Header();
  }

  public draw(): void {
    const registrationForm: HTMLElement = this.createRegistrationForm();
    const modal: HTMLElement = this.modal.createModal(
      "modal-sign-up",
      registrationForm
    );
    document.body.append(modal);
  }

  private createRegistrationForm(): HTMLElement {
    const registrationForm: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    const title: HTMLElement = this.createTitle();
    const form: HTMLElement = this.createForm();
    const question: HTMLElement = this.createQuestion();
    registrationForm.append(title, form, question);
    return registrationForm;
  }

  private createTitle(): HTMLElement {
    const title: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      "Welcome to Women Workouts"
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
      validate: isEmailValid,
    });
    const inputBlockPassword: HTMLElement = PasswordInput();
    const btnWrap: HTMLElement = this.createBtnWrap();
    const message: HTMLElement = this.createMessageEl();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData: FormData = new FormData(form);
      const valueEmail: string | undefined = formData.get("email")?.toString();
      const valuePsw: string | undefined = formData.get("password")?.toString();
      if (!valueEmail || !valuePsw) {
        return;
      }
      this.sendRegistration(
        {
          email: valueEmail,
          password: valuePsw,
        },
        message
      );
    });

    form.append(inputBlockEmail, inputBlockPassword, message, btnWrap);
    return form;
  }

  private createMessageEl(): HTMLElement {
    const message: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__message`
    );
    return message;
  }

  private createBtnWrap(): HTMLElement {
    const mainClass = "btn-wrap";
    const btnWrap: HTMLElement = this.template.createElement("div", mainClass);
    const btn: HTMLButtonElement = Button({
      content: "Sign Up",
      className: [`${mainClass}__btn`],
      type: "submit",
    });
    btnWrap.append(btn);
    return btnWrap;
  }

  private async sendRegistration(
    dataInputAuth: { email: string; password: string },
    messageEl: HTMLElement
  ): Promise<void> {
    const res: IAnswerAuth | undefined = await this.authorization.registration(
      dataInputAuth
    );
    console.log(res);

    if (!res) {
      return;
    }
    if (res.token && res.userId) {
      setUserLocalStorage({ token: res.token, userId: res.userId });
      this.header.draw();
      onCloseModal("modal-sign-up")();
    }
    if (res.message) {
      this.ErrorHandler(res, messageEl);
    }
  }

  private ErrorHandler(res: IAnswerAuth, messageEl: HTMLElement) {
    const inputs: NodeList = document.querySelectorAll(
      ".registration-form .input__item"
    );
    const arrInputs: HTMLElement[] = Array.prototype.slice.call(inputs);
    arrInputs.forEach((input) => {
      input.classList.add("error");
    });
    messageEl.classList.add("error");
    if (!res.message) {
      return;
    }
    messageEl.textContent = res.message;
  }

  private createQuestion(): HTMLElement {
    const question: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__question`
    );
    const questionContent: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__text`,
      "Already have an account?"
    );
    const linkSignIn: HTMLAnchorElement = this.template.createLink(
      `${this.mainClass}__link`,
      "/",
      "Sing in"
    );

    linkSignIn.onclick = onOpenModal("modal-sign-in", "modal-sign-up");

    question.append(questionContent, linkSignIn);
    return question;
  }
}

export default ModalSignUp;
