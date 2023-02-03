class Template {
  public createElement(
    tagName: string,
    myClass: string,
    content?: string
  ): HTMLElement {
    const newElem: HTMLElement = document.createElement(tagName);
    newElem.classList.add(myClass);
    if (content) {
      newElem.textContent = content;
    }
    return newElem;
  }

  public createLink(
    myClass: string,
    href: string,
    content?: string
  ): HTMLAnchorElement {
    const newElem: HTMLAnchorElement = document.createElement("a");
    newElem.classList.add(myClass);
    newElem.href = href;
    if (content) {
      newElem.textContent = content;
    }
    return newElem;
  }

  public createBtn(
    myClass: string,
    content: string | HTMLElement | undefined,
    type?: string
  ): HTMLButtonElement {
    const btn: HTMLButtonElement = document.createElement("button");
    btn.classList.add(myClass);

    if (typeof content === "string") {
      btn.textContent = content;
    }
    if (content && typeof content !== "string") {
      btn.append(content);
    }
    if (type) {
      btn.type = type;
    }

    return btn;
  }

  public createForm(className: string, action: string): HTMLFormElement {
    const form: HTMLFormElement = document.createElement("form");
    form.classList.add(className);
    form.action = action;
    return form;
  }

  public createIcon(className: string, classNameIcon: string): HTMLElement {
    const icon: HTMLElement = document.createElement("i");
    icon.classList.add(className);
    icon.classList.add(classNameIcon);
    return icon;
  }

  public createVideo(src: string): HTMLVideoElement {
    const newElem: HTMLVideoElement = document.createElement("video");
    newElem.src = src;
    newElem.autoplay = true;
    newElem.muted = true;
    newElem.loop = true;
    return newElem;
  }
}

export default Template;
