import { IInputImg, ITemplate, IValidate } from "../types/index";
import { addClasses } from "../utils/component-utils";
import Template from "../templates/template";
const template: ITemplate = new Template();

export function InputImg({
  mainClass,
  className,
  attributes,
  imgSrc,
  imgAlt,
  validate,
  units,
  classNameUnits,
}: IInputImg): HTMLElement {
  const inputBlock: HTMLElement = template.createElement(
    "div",
    `${mainClass}__input`
  );
  addClasses(inputBlock, className);
  const inputWrap: HTMLElement = template.createElement(
    "div",
    `${mainClass}__wrapper`
  );
  const input: HTMLInputElement = createInput(mainClass, attributes);
  const error: HTMLElement = template.createElement(
    "span",
    `${mainClass}__error`
  );
  const unitsEl: HTMLElement = createUnitsTitle(units, classNameUnits);

  if (validate) {
    input.onchange = () => {
      const validateDate: IValidate = validate(input.value, units);
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
  inputWrap.append(img, input, unitsEl);
  inputBlock.append(inputWrap, error);
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

function createUnitsTitle(units: string, classNameUnits: string): HTMLElement {
  const unitsEl: HTMLElement = template.createElement(
    "span",
    `${classNameUnits}`,
    units
  );
  return unitsEl;
}

function addAttributes(
  input: HTMLInputElement,
  attributes: Record<string, string>
): void {
  for (const key in attributes) {
    input.setAttribute(key, attributes[key]);
  }
}
