import { IInputIcon, ITemplate, IValidate } from '../types/index';
import { addClasses } from '../utils/component-utils';
import Template from '../templates/template';

export function InputIcon({ className, attributes, classNameIcon, validate }: IInputIcon): HTMLElement {
  const template: ITemplate = new Template();
  const mainClass = 'input';
  const inputBlock: HTMLElement = template.createElement('div', mainClass);
  addClasses(inputBlock, className);
  const input: HTMLInputElement = createInput(mainClass, attributes);
  const error: HTMLElement = template.createElement('span', `${mainClass}__error`);

  if (validate) {
    input.onchange = () => {
      onChangeHandlerInput(validate, input, error);
    };
  }

  const icon: HTMLElement = template.createIcon(`${mainClass}__icon`, classNameIcon);
  inputBlock.append(input, icon, error);
  return inputBlock;
}

function onChangeHandlerInput(validate: (inputValue: string) => IValidate, input: HTMLInputElement, error: HTMLElement): void {
  const validateDate: IValidate = validate(input.value);
  if (!validateDate.res) {
    input.classList.add('error');
    error.textContent = validateDate.message || '';
  } else {
    input.classList.remove('error');
    error.textContent = '';
  }
}

function createInput(mainClass: string, attributes: Record<string, string>): HTMLInputElement {
  const input: HTMLInputElement = document.createElement('input');
  input.classList.add(`${mainClass}__item`);
  addAttributes(input, attributes);
  return input;
}

function addAttributes(input: HTMLInputElement, attributes: Record<string, string>): void {
  for (const key in attributes) {
    input.setAttribute(key, attributes[key]);
  }
}
