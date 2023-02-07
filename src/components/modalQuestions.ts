import Modal from "../components/modal";
import Template from "../templates/template";
import {
  IModal,
  ITemplate,
  IHeader,
  IBtnRadio,
  IDataFormQuestions,
} from "../types/index";
import { ButtonRadio } from "../components/ButtonRadio";
import Header from "../components/header";
import { InputImg } from "../components/InputImg";
import { isHeightValid } from "../utils/validate";
import { isScalesValid } from "../utils/validate";
import { formSlider, IFormSlider } from "../utils/formSlider";

class ModalQuestions {
  template: ITemplate;
  modal: IModal;
  mainClass: string;
  mainClassSecond: string;
  slider: IFormSlider;
  // header: IHeader;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = "slider-questions";
    this.mainClassSecond = "slide-info";
    this.slider = formSlider({ slideCount: 3 });
    // this.header = new Header();
  }

  public draw(): void {
    const sliderWrap: HTMLElement = this.createSliderWrap();
    const modal: HTMLElement = this.modal.createModal(
      "modal-questions",
      sliderWrap
    );
    document.body.append(modal);
  }

  private createSliderWrap(): HTMLElement {
    const mainClass = "slider-wrapper";
    const sliderWrap: HTMLElement = this.template.createElement(
      "div",
      mainClass
    );
    const slider: HTMLElement = this.createSlider();
    const sliderControl: HTMLElement = this.sliderControl();

    sliderWrap.append(slider, sliderControl);
    return sliderWrap;
  }

  private sliderControl(): HTMLElement {
    const mainClass = "slider-control";
    const sliderControl: HTMLElement = this.template.createElement(
      "div",
      mainClass
    );
    const arrowBack: HTMLElement = this.template.createElement(
      "i",
      `${mainClass}__back`
    );
    arrowBack.classList.add("icon-arrow_back_ios");
    arrowBack.onclick = this.slider.prevSlide;
    this.slider.setPrevBtn(arrowBack);
    const sliderPoints: HTMLElement = this.createSliderPoints();
    this.slider.setPointerContainer(sliderPoints);
    const arrowForward: HTMLElement = this.template.createElement(
      "i",
      `${mainClass}__forward`
    );
    arrowForward.classList.add("icon-arrow_forward_ios");
    arrowForward.onclick = this.slider.nextSlide;
    this.slider.setNextBtn(arrowForward);
    sliderControl.append(arrowBack, sliderPoints, arrowForward);
    return sliderControl;
  }

  private createSlider(): HTMLElement {
    const slider: HTMLElement = this.template.createElement(
      "div",
      this.mainClass
    );
    const sliderForm: HTMLElement = this.createSliderForm();
    slider.append(sliderForm);
    return slider;
  }

  private createSliderForm(): HTMLElement {
    const sliderForm: HTMLElement = this.template.createForm(
      `${this.mainClass}__form`,
      "/"
    );
    const slideList: HTMLElement = this.createSliderList();
    sliderForm.append(slideList);
    return sliderForm;
  }

  private createSliderList(): HTMLElement {
    const dataFormQuestions: IDataFormQuestions[] = [
      {
        title: "Before we start",
        question: "What is your goal?",
        name: "goal",
        nameBtn: ["Keep Fit", "Lose Weight", "Get Stronger"],
        values: ["form", "lose-weight", "force"],
      },
      {
        title: "Load",
        question: "What load would you like?",
        name: "equipment",
        nameBtn: ["Low", "Middle", "High"],
        values: ["no", "dumbbells", "gym"],
      },
    ];

    const sliderList: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__list`
    );
    this.slider.setContainer(sliderList);
    dataFormQuestions.forEach((slideData: IDataFormQuestions) => {
      const slide: HTMLElement = this.createSlide(slideData);
      sliderList.append(slide);
    });
    const createSlideAboutMe: HTMLElement = this.createSlideAboutMe();
    sliderList.append(createSlideAboutMe);
    return sliderList;
  }

  private createSlide({
    title,
    question,
    name,
    nameBtn,
    values,
  }: IDataFormQuestions): HTMLElement {
    const slide: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__slide`
    );
    const slideContent: HTMLElement[] = this.createSlideContent(
      title,
      question
    );
    const btnWrap: HTMLElement = this.createBtnWrap(name, nameBtn, values);
    slide.append(...slideContent, btnWrap);
    return slide;
  }

  private createSlideContent(title: string, question: string): HTMLElement[] {
    const titleEl: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      title
    );
    const questionEl: HTMLElement = this.template.createElement(
      "span",
      `${this.mainClass}__question`,
      question
    );
    return [titleEl, questionEl];
  }

  private createSlideAboutMe(): HTMLElement {
    const slide: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__slide`
    );
    const titleEl: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__title`,
      "Tell us about yourself"
    );
    const inputWrap: HTMLElement = this.createSlideAboutMeInputWrap();
    const btnBlock: HTMLElement = this.createSlideAboutMeBtnBlock();
    slide.append(titleEl, inputWrap, btnBlock);
    return slide;
  }

  private createSlideAboutMeInputWrap(): HTMLElement {
    const inputWrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__input-wrap`
    );

    const inputBlockOne: HTMLElement = InputImg({
      className: [],
      attributes: {
        id: "weight",
        name: "weight",
        type: "number",
        placeholder: "Enter weight",
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
      },
      imgSrc: "../assets/svg/height.svg",
      imgAlt: "height-img",
      validate: isHeightValid,
    });
    inputWrap.append(inputBlockOne, inputBlockTwo);
    return inputWrap;
  }

  private createSlideAboutMeBtnBlock(): HTMLElement {
    const btnWrapOne: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__btn-wrap`
    );
    const btnOne: HTMLElement[] = ButtonRadio(
      {
        type: "radio",
        id: "kg-cm",
        name: "units",
        className: `${this.mainClassSecond}__btn`,
        value: "kg-cm",
        checked: "checked",
      },
      {
        forName: "kg-cm",
        content: "kg/cm",
        className: `${this.mainClassSecond}__btn-title`,
      }
    );

    btnWrapOne.append(...btnOne);
    const btnWrapTwo: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__btn-wrap`
    );
    const btnTwo: HTMLElement[] = ButtonRadio(
      {
        type: "radio",
        id: "Lbs-inches",
        name: "units",
        className: `${this.mainClassSecond}__btn`,
        value: "Lbs-inches",
      },
      {
        forName: "Lbs-inches",
        content: "Lbs/inches",
        className: `${this.mainClassSecond}__btn-title`,
      }
    );
    btnWrapTwo.append(...btnTwo);
    const btnBlock: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClassSecond}__buttons`
    );
    btnBlock.append(btnWrapOne, btnWrapTwo);
    return btnBlock;
  }

  private createBtnWrap(
    name: string,
    nameBtn: string[],
    values: string[]
  ): HTMLElement {
    const btnWrap: HTMLElement = this.template.createElement(
      "div",
      `${this.mainClass}__buttons`
    );
    values.forEach((value, index) => {
      const btnRadio: IBtnRadio[] = ButtonRadio(
        {
          type: "radio",
          value: value,
          id: name + index,
          name: name,
          className: `${this.mainClass}__input`,
        },
        {
          forName: name + index,
          content: nameBtn[index],
          className: `${this.mainClass}__label`,
        }
      );
      btnWrap.append(...btnRadio);
    });
    return btnWrap;
  }

  private createSliderPoints(): HTMLElement {
    const mainClass = "slider-points";
    const sliderPoints: HTMLElement = this.template.createElement(
      "div",
      `${mainClass}`
    );
    for (let i = 0; i < 3; i++) {
      const sliderItem: HTMLElement = this.createSliderPointsElements(
        mainClass
      );
      sliderItem.onclick = this.slider?.goToSlide(i);
      sliderPoints.append(sliderItem);
    }
    return sliderPoints;
  }

  private createSliderPointsElements(className: string): HTMLElement {
    const sliderItem: HTMLElement = this.template.createElement(
      "div",
      `${className}__item`
    );
    return sliderItem;
  }

  // private createBtn(): HTMLButtonElement {
  //   const btn: HTMLButtonElement = Button({
  //     content: 'Sign In',
  //     className: [`${this.mainClass}__btn`],
  //     type: 'submit',
  //   });
  //   return btn;
  // }

  // private createForm() {
  //   const form: HTMLFormElement = this.template.createForm(`${this.mainClass}__form`, '/');
  //   const inputBlockEmail: HTMLElement = Input({
  //     className: [],
  //     attributes: {
  //       type: 'text',
  //       placeholder: 'Enter your email',
  //       name: 'email',
  //       required: 'true',
  //     },
  //     classNameIcon: 'icon-mail_outline',
  //     validate: isEmailValid,
  //   });
  //   const inputBlockPassword: HTMLElement = PasswordInput();
  //   const btnWrap: HTMLElement = this.createBtnWrap();
  //   // const message: HTMLElement = this.createMessageForm();

  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const formData: FormData = new FormData(form);
  //     const valueEmail: string | undefined = formData.get('email')?.toString();
  //     const valuePsw: string | undefined = formData.get('password')?.toString();
  //     if (!valueEmail || !valuePsw) {
  //       return;
  //     }
  //     this.sendAuth(
  //       {
  //         email: valueEmail,
  //         password: valuePsw,
  //       },
  //       message
  //     );
  //   });

  //   form.append(inputBlockEmail, inputBlockPassword, message, btnWrap);
  //   return form;
  // }

  // private createMessageForm(): HTMLElement {
  //   const message: HTMLElement = this.template.createElement(
  //     "span",
  //     `${this.mainClass}__message`
  //   );
  //   return message;
  // }

  // private async sendAuth(
  //   dataInputAuth: { email: string; password: string },
  //   messageEl: HTMLElement
  // ): Promise<void> {
  //   const res: IAnswerAuth | undefined = await this.authorization.authorization(
  //     dataInputAuth
  //   );
  //   if (!res) {
  //     return;
  //   }

  //   if (res.token && res.userId) {
  //     setUserLocalStorage({ token: res.token, userId: res.userId });
  //     this.header.draw();
  //     onCloseModal("modal-sign-in")();
  //   }
  //   if (res.message) {
  //     this.ErrorHandler(res, messageEl);
  //   }
  // }

  // private ErrorHandler(res: IAnswerAuth, messageEl: HTMLElement) {
  //   const inputs: NodeList = document.querySelectorAll(
  //     ".login-form .input__item"
  //   );
  //   const arrInputs: HTMLElement[] = Array.prototype.slice.call(inputs);
  //   arrInputs.forEach((input) => {
  //     input.classList.add("error");
  //   });
  //   messageEl.classList.add("error");
  //   if (res.message) {
  //     messageEl.textContent = res.message;
  //   }
  // }
}

export default ModalQuestions;
