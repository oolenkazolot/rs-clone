import { ITemplate } from "../types";
import Template from "../templates/template";

class Slider {
  template: ITemplate;

  constructor() {
    this.template = new Template();
  }

  public slideRight(
    n: number,
    buttonRight: HTMLButtonElement,
    buttonLeft: HTMLButtonElement,
    wrapper: HTMLElement,
    length: number
  ): void {
    if (n < length - 1) {
      buttonRight.disabled = false;
      n++;
      console.log(n);
      buttonLeft.disabled = false;
      const delta = 33.33 * n;
      wrapper.style.justifyContent = "flex-start";
      wrapper.style.transform = `translate(-${delta}%)`;
    }
    if (n >= length - 1) {
      buttonRight.disabled = true;
    }
  }
}

export default Slider;
