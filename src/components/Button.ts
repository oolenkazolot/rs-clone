import { IButton } from "../types/index";
import { addClasses } from "../utils/component-utils";

function Button({
  content,
  className,
  variant,
  onClick,
  type,
}: IButton): HTMLButtonElement {
  const mainClass = "btn";
  const btn: HTMLButtonElement = document.createElement("button");
  btn.classList.add(mainClass);
  if (type) {
    btn.type = type;
  }
  addClasses(btn, className);
  addContent(btn, content);
  if (variant) {
    btn.classList.add(`${mainClass}--${variant}`);
  }
  if (onClick) {
    btn.onclick = onClick;
  }

  return btn;
}

function addContent(
  btn: HTMLButtonElement,
  content: string | HTMLElement
): void {
  if (typeof content === "string") {
    btn.textContent = content;
  } else {
    btn.append(content);
  }
}

export default Button;
