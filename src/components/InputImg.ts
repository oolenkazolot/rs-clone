import { IInputImg, ITemplate, IValidate } from "../types/index";
import { addClasses } from "../utils/component-utils";
import Template from "../templates/template";

export function InputImg({
  className,
  attributes,
  imgSrc,
  imgAlt,
  validate,
}: IInputImg): HTMLElement {
  const template: ITemplate = new Template();
  const mainClass = "slide-info";
  const inputBlock: HTMLElement = template.createElement(
    "div",
    `${mainClass}__input`
  );
  addClasses(inputBlock, className);
  const input: HTMLInputElement = createInput(mainClass, attributes);
  const error: HTMLElement = template.createElement(
    "span",
    `${mainClass}__error`
  );

  if (validate) {
    input.onchange = () => {
      const validateDate: IValidate = validate(input.value);
      if (!validateDate.res) {
        input.classList.add("error");
        error.textContent = validateDate.message || "";
      } else {
        input.classList.remove("error");
        error.textContent = "";
      }
    };
  }

  const img: HTMLElement = template.createImage(
    imgSrc,
    imgAlt,
    `${mainClass}__img`
  );
  inputBlock.append(img, input, error);
  return inputBlock;
}

function createInput(
  mainClass: string,
  attributes: Record<string, string>
): HTMLInputElement {
  const input: HTMLInputElement = document.createElement("input");
  input.classList.add(`${mainClass}__input-item`);
  addAttributes(input, attributes);
  return input;
}

function addAttributes(
  input: HTMLInputElement,
  attributes: Record<string, string>
): void {
  for (const key in attributes) {
    input.setAttribute(key, attributes[key]);
  }
}
