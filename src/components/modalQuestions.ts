import Modal from '../components/modal';
import Template from '../templates/template';
import { IModal, ITemplate, IHeader, IBtnRadio, IDataFormQuestions } from '../types/index';
import { ButtonRadio } from '../components/ButtonRadio';
import Header from '../components/header';

class ModalQuestions {
  template: ITemplate;
  modal: IModal;
  mainClass: string;
  // header: IHeader;

  constructor() {
    this.modal = new Modal();
    this.template = new Template();
    this.mainClass = 'slider-questions';
    // this.header = new Header();
  }

  public draw(): void {
    const sliderWrap: HTMLElement = this.createSliderWrap();
    const modal: HTMLElement = this.modal.createModal('modal-questions', sliderWrap);
    modal.classList.add('open');
    document.body.append(modal);
  }

  private createSliderWrap(): HTMLElement {
    const mainClass: string = 'slider-wrapper';
    const sliderWrap: HTMLElement = this.template.createElement('div', mainClass);
    const slider: HTMLElement = this.createSlider();
    const sliderControl: HTMLElement = this.sliderControl();

    sliderWrap.append(slider, sliderControl);
    return sliderWrap;
  }

  private sliderControl(): HTMLElement {
    const mainClass: string = 'slider-control';
    const sliderControl: HTMLElement = this.template.createElement('div', mainClass);
    const arrowBack: HTMLElement = this.template.createElement('i', `${mainClass}__back`);
    arrowBack.classList.add('icon-arrow_back_ios');
    const sliderPoints: HTMLElement = this.createSliderPoints();
    const arrowForward: HTMLElement = this.template.createElement('i', `${mainClass}__forward`);
    arrowForward.classList.add('icon-arrow_forward_ios');
    sliderControl.append(arrowBack, sliderPoints, arrowForward);
    return sliderControl;
  }

  private createSlider(): HTMLElement {
    const slider: HTMLElement = this.template.createElement('div', this.mainClass);
    const sliderForm: HTMLElement = this.createSliderForm();
    slider.append(sliderForm);
    return slider;
  }

  private createSliderForm(): HTMLElement {
    const sliderForm: HTMLElement = this.template.createForm(`${this.mainClass}__form`, '/');
    const slideList: HTMLElement = this.createSliderList();
    sliderForm.append(slideList);
    return sliderForm;
  }

  private createSliderList(): HTMLElement {
    const dataFormQuestions: IDataFormQuestions[] = [
      {
        title: 'Before you start',
        question: 'What is your goal?',
        name: 'goal',
        nameBtn: ['keep fit', 'lose weight', 'Get stronger'],
        values: ['form', 'lose-weight', 'force'],
      },
      {
        title: 'Equipment',
        question: 'What equipment do you have?',
        name: 'equipment',
        nameBtn: ['no', 'only dumbbells', 'Gym'],
        values: ['no', 'dumbbells', 'gym'],
      },
    ];

    const sliderList: HTMLElement = this.template.createElement('div', `${this.mainClass}__list`);
    dataFormQuestions.forEach((slideData: IDataFormQuestions) => {
      const slide: HTMLElement = this.createSlide(slideData);
      sliderList.append(slide);
    });

    return sliderList;
  }

  private createSlide({ title, question, name, nameBtn, values }: IDataFormQuestions): HTMLElement {
    const slide: HTMLElement = this.template.createElement('div', `${this.mainClass}__slide`);
    const slideContent: HTMLElement[] = this.createSlideContent(title, question);
    const btnWrap: HTMLElement = this.createBtnWrap(name, nameBtn, values);
    slide.append(...slideContent, btnWrap);
    return slide;
  }

  private createSlideContent(title: string, question: string): HTMLElement[] {
    const titleEl: HTMLElement = this.template.createElement('div', `${this.mainClass}__title`, title);
    const questionEl: HTMLElement = this.template.createElement('span', `${this.mainClass}__question`, question);
    return [titleEl, questionEl];
  }

  private createBtnWrap(name: string, nameBtn: string[], values: string[]): HTMLElement {
    const btnWrap: HTMLElement = this.template.createElement('div', `${this.mainClass}__buttons`);
    values.forEach((value, index) => {
      const btnRadio: IBtnRadio[] = ButtonRadio(
        {
          type: 'radio',
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
    const mainClass: string = 'slider-points';
    const sliderPoints: HTMLElement = this.template.createElement('div', `${mainClass}`);
    for (let i = 0; i < 4; i++) {
      const sliderItem: HTMLElement = this.createSliderPointsElements(mainClass);
      sliderPoints.append(sliderItem);
    }
    return sliderPoints;
  }

  private createSliderPointsElements(className: string): HTMLElement {
    const sliderItem: HTMLElement = this.template.createElement('div', `${className}__item`);
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
