import Template from '../templates/template';
import { ITemplate } from '../types/index';
import Button from '../components/button';

class Header {
  template: ITemplate;
  constructor() {
    this.template = new Template();
  }

  public draw(): void {
    const header: HTMLElement | null = document.querySelector('header');
    if (!header) {
      return;
    }
    header.classList.add('header');
    header.append(this.createLogo(), this.createButtons());
  }

  public onClickHandlerSignIn(): void {
    console.log('');
  }

  public onClickHandlerSignUp(): void {
    console.log('');
  }

  private createLogo(): HTMLElement {
    const logo: HTMLAnchorElement = this.template.createLink('logo', '/');
    const spanOne: HTMLElement = this.template.createElement('span', 'logo__content', 'Women Workouts');
    const spanTwo: HTMLElement = this.template.createElement('span', 'logo__content', 'Women Workouts');
    logo.append(spanOne, spanTwo);
    return logo;
  }

  private createButtons(): HTMLElement {
    const buttons: HTMLElement = this.template.createElement('div', 'header__buttons');
    const btnSignIn: HTMLButtonElement = Button({
      content: 'Sign In',
      className: ['header__btn'],
      onClick: this.onClickHandlerSignIn,
    });
    const btnSignUp: HTMLButtonElement = Button({
      content: 'Sign Up',
      className: ['header__btn'],
      variant: 'second',
      onClick: this.onClickHandlerSignIn,
    });

    buttons.append(btnSignIn, btnSignUp);
    return buttons;
  }
}

export default Header;
