import { IInputBlock, ITemplate } from "../types/index";
import { addClasses } from "../utils/component-utils";
import Template from "../templates/template";

export function Input({
  className,
  attributes,
  classNameIcon,
}: IInputBlock): HTMLElement {
  const template: ITemplate = new Template();
  const mainClass = "input";
  const inputBlock: HTMLElement = document.createElement("div");
  inputBlock.classList.add(mainClass);
  addClasses(inputBlock, className);
  const input: HTMLInputElement = createInput(mainClass, attributes);
  const icon: HTMLElement = template.createIcon(
    `${mainClass}__icon`,
    classNameIcon
  );
  inputBlock.append(input, icon);
  return inputBlock;
}

function createInput(
  mainClass: string,
  attributes: Record<string, string>
): HTMLInputElement {
  const input: HTMLInputElement = document.createElement("input");
  input.classList.add(`${mainClass}__item`);
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
