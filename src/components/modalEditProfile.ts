import Modal from "./modal";
import Template from "../templates/template";
import { IModal, ITemplate } from "../types/index";
import { InputImg } from "../components/InputImg";
import { isHeightValid } from "../utils/validate";
import { isScalesValid } from "../utils/validate";
import Button from "../components/Button";
import { onCloseModal } from "../utils/component-utils";

class ModalEditProfile {
  template: ITemplate;
  modal: IModal;
  mainClass: string;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "edit-form";
  }

  public createModal(): HTMLElement {
    const editForm: HTMLElement = this.createEditForm();
    const modal: HTMLElement = this.modal.createModal(
      "modal-edit-profile",
      editForm
    );
    return modal;
  }

  private createEditForm(): HTMLElement {
    const editForm: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    const title: HTMLElement = this.createTitle();
    const form: HTMLElement = this.createForm();
    editForm.append(title, form);

    return editForm;
  }

  private createTitle(): HTMLElement {
    const title: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      "Edit your weight/height"
    );
    return title;
  }

  private createForm() {
    const form: HTMLFormElement = this.template.createForm(
      `${this.mainClass}__form`,
      "/"
    );

    const inputWrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__input-wrap`
    );
    const inputBlockOne: HTMLElement = InputImg({
      className: [],
      attributes: {
        id: "weight",
        name: "weight",
        type: "number",
        placeholder: "Enter weight",
        required: "true",
      },
      imgSrc: "../assets/svg/scales.svg",
      imgAlt: "scales-img",
      validate: isScalesValid,
    });

    const inputBlockTwo: HTMLElement = InputImg({
      className: [],
      attributes: {
        id: "height",
        name: "height",
        type: "number",
        placeholder: "Enter height",
        required: "true",
      },
      imgSrc: "../assets/svg/height.svg",
      imgAlt: "height-img",
      validate: isHeightValid,
    });
    inputWrap.append(inputBlockOne, inputBlockTwo);
    const btnEdit: HTMLElement = this.createBtnUpdate();
    // form.addEventListener("submit", (e) => {
    //   this.onSubmitHandlerForm(e, form, message);
    // });

    form.append(inputWrap, btnEdit);
    return form;
  }

  private createBtnUpdate(): HTMLElement {
    const btnUpdate: HTMLElement = this.template.createBtn(
      `${this.mainClass}__btn`,
      "Update"
    );
    // Button({content: 'edit', className: [`${this.mainClass}__btn`, 'btn'], }
    btnUpdate.classList.add("btn");
    return btnUpdate;
  }

  // private onSubmitHandlerForm(
  //   e: Event,
  //   form: HTMLFormElement,
  //   message: HTMLElement
  // ): void {
  //   e.preventDefault();
  //   const formData: FormData = new FormData(form);
  //   const valueEmail: string | undefined = formData.get("email")?.toString();
  //   const valuePsw: string | undefined = formData.get("password")?.toString();
  //   if (!valueEmail || !valuePsw) {
  //     return;
  //   }
  //   this.sendAuth(
  //     {
  //       email: valueEmail,
  //       password: valuePsw,
  //     },
  //     message
  //   );
  // }

  // private async sendInfoUser(
  //   dataInfoUser: Record<string, string>
  // ): Promise<void> {
  //   const res:
  //     | IAnswerAddUserInfo
  //     | undefined = await this.authorization.addUserInfo(dataInfoUser);

  //   if (!res) {
  //     return;
  //   }
  //   if (res.errors && res.message) {
  //     this.ErrorHandler(res);
  //   } else {
  //     const messageEl: HTMLElement | null = document.querySelector(
  //       `.${this.mainClass}__message-form`
  //     );
  //     if (messageEl) {
  //       messageEl.textContent = "";
  //       messageEl.classList.remove("error");
  //     }
  //     onCloseModal("modal-questions")();
  //   }
  // }

  // private ErrorHandler(res: IAnswerAddUserInfo): void {
  //   console.log(res.message);
  //   const inputs: NodeList = document.querySelectorAll(
  //     `${this.mainClassSecond}__input`
  //   );
  //   const arrInputs: HTMLElement[] = Array.prototype.slice.call(inputs);

  //   arrInputs.forEach((input) => {
  //     input.classList.add("error");
  //   });

  //   const messageEl: HTMLElement | null = document.querySelector(
  //     `.${this.mainClass}__message-form`
  //   );
  //   if (!messageEl) {
  //     return;
  //   }
  //   messageEl.textContent = res.message;
  //   messageEl.classList.add("error");
  // }
}

export default ModalEditProfile;
