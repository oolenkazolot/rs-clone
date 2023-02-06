import { Input } from "../components/Input";
import { ITemplate } from "../types/index";
import Template from "../templates/template";
import { isPasswordValid } from "../utils/validate";
const template: ITemplate = new Template();

export function PasswordInput(): HTMLElement {
  const inputBlock: HTMLElement = Input({
    className: [],
    attributes: {
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      required: "true",
    },

    classNameIcon: "icon-lock_outline",
    validate: isPasswordValid,
  });
  const mainClass = "input";
  const icon: HTMLElement = createIcon(mainClass, inputBlock);
  inputBlock.append(icon);
  return inputBlock;
}

function createIcon(mainClass: string, inputBlock: HTMLElement): HTMLElement {
  const icon: HTMLElement = template.createIcon(
    `${mainClass}__right-icon`,
    "icon-eye-blocked"
  );
  const input: HTMLInputElement | null = inputBlock.querySelector(
    `.${mainClass}__item`
  );
  icon.addEventListener("click", () => {
    onClickHandlerIcon(icon, input);
  });
  return icon;
}

function onClickHandlerIcon(
  icon: HTMLElement,
  input: HTMLInputElement | null
): void {
  if (!input) {
    return;
  }
  if (icon.classList.contains("icon-eye-blocked")) {
    icon.classList.remove("icon-eye-blocked");
    icon.classList.add("icon-eye");
    input.type = "text";
  } else {
    icon.classList.remove("icon-eye");
    icon.classList.add("icon-eye-blocked");
    input.type = "password";
  }
}
