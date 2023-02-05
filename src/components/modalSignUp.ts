import Modal from "../components/modal";
import Template from "../templates/template";
import { IModal, ITemplate } from "../types/index";
import { Input } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import Button from "../components/button";
import { onOpenModal } from "../utils/component-utils";
import { isEmailValid } from "../utils/validate";

class ModalSignUp {
  template: ITemplate;
  modal: IModal;
  mainClass: string;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "registration-form";
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
    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   this.sendAuth(
    //     {
    //       email: form.email,
    //       password: form.password,
    //     },
    //     message
    //   );
    // });

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

    // btn.disabled = isValidEmail && isValidPassword ? false : true;
    btnWrap.append(btn);
    return btnWrap;
  }

  // private async sendAuth(dataInputAuth: { email: string; password: string }, messageEl: HTMLElement): Promise<void> {
  //   const res: IAnswerAuth | undefined = await this.authorization.authorization(dataInputAuth);
  //   if (!res) {
  //     return;
  //   }
  //   this.ErrorHandler(res, messageEl);
  // }

  // private ErrorHandler(res: IAnswerAuth, messageEl: HTMLElement) {
  //   const inputs: NodeList = document.querySelectorAll('.login-form .input__item');
  //   const arrInputs: HTMLElement[] = Array.prototype.slice.call(inputs);
  //   arrInputs.forEach((input) => {
  //     input.classList.add('error');
  //   });
  //   messageEl.classList.add('error');
  //   messageEl.textContent = res.message;
  // }

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
