import { Input } from "../components/Input";
import { ITemplate } from "../types/index";
import Template from "../templates/template";

// <input class="input__item" type="password" placeholder="Enter your password" name="psw" required>
// <i class="icon-eye-blocked input__icon input__icon--eye"></i>
// <i class="icon-lock_outline input__icon"></i>
// </div>

export function PasswordInput(): HTMLElement {
  const template: ITemplate = new Template();
  const inputBlock: HTMLElement = Input({
    className: [],
    attributes: {
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      required: "true",
    },
    classNameIcon: "icon-eye-blocked",
  });
  const mainClass = "input";
  const icon: HTMLElement = template.createIcon(
    `${mainClass}__icon`,
    "icon-lock_outline"
  );
  inputBlock.append(icon);
  return inputBlock;
}

// добавить класс иконке класс input__icon--eye при навешивании логики
