import { IDataInputRadio, IDataLabel, ITemplate, IBtnRadio } from '../types/index';
import Template from '../templates/template';

const template: ITemplate = new Template();

export function ButtonRadio(dataInput: IDataInputRadio, dataLabel: IDataLabel): IBtnRadio[] {
  const input: HTMLInputElement = createInput(dataInput);
  const label: HTMLLabelElement = createLabel(dataLabel);
  return [input, label];
}

function createInput({ type, id, name, className, value }: IDataInputRadio): HTMLInputElement {
  const input: HTMLInputElement = template.createInput(className, {
    type: type,
    id: id,
    name: name,
    value: value,
  });
  return input;
}

function createLabel({ forName, content, className }: IDataLabel): HTMLLabelElement {
  const label: HTMLLabelElement = template.createLabel(className, forName, content);
  return label;
}

export default ButtonRadio;
