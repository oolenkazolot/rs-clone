class Template {
  public createElement(tagName: string, myClass: string, content?: string): HTMLElement {
    const newElem: HTMLElement = document.createElement(tagName);
    newElem.classList.add(myClass);
    if (content) {
      newElem.textContent = content;
    }
    return newElem;
  }

  public createLink(myClass: string, href: string, content?: string): HTMLAnchorElement {
    const newElem: HTMLAnchorElement = document.createElement('a');
    newElem.classList.add(myClass);
    newElem.href = href;
    if (content) {
      newElem.textContent = content;
    }
    return newElem;
  }

  public createBtn(myClass: string, content: string | HTMLElement | undefined, type?: string): HTMLButtonElement {
    const btn: HTMLButtonElement = document.createElement('button');
    btn.classList.add(myClass);

    if (typeof content === 'string') {
      btn.textContent = content;
    }
    if (content && typeof content !== 'string') {
      btn.append(content);
    }
    if (type) {
      btn.type = type;
    }

    return btn;
  }

  public createForm(className: string, action: string): HTMLFormElement {
    const form: HTMLFormElement = document.createElement('form');
    form.classList.add(className);
    form.action = action;
    return form;
  }

  public createIcon(className: string, classNameIcon: string): HTMLElement {
    const icon: HTMLElement = document.createElement('i');
    icon.classList.add(className);
    icon.classList.add(classNameIcon);
    return icon;
  }

  public createVideo(src: string): HTMLVideoElement {
    const newElem: HTMLVideoElement = document.createElement('video');
    newElem.src = src;
    newElem.autoplay = true;
    newElem.muted = true;
    newElem.loop = true;
    return newElem;
  }

  public createImage(src: string, alt: string, imgClassName: string): HTMLImageElement {
    const newImage: HTMLImageElement = document.createElement('img');
    newImage.src = src;
    newImage.alt = alt;
    newImage.className = imgClassName;
    return newImage;
  }

  public createLabel(className?: string | undefined, forName?: string | undefined, content?: string | undefined): HTMLLabelElement {
    const label: HTMLLabelElement = document.createElement('label');
    if (forName) {
      label.setAttribute('for', forName);
    }
    if (className) {
      label.classList.add(className);
    }
    if (content) {
      label.textContent = content;
    }
    return label;
  }

  public createInput(mainClass: string, attributes: Record<string, string>): HTMLInputElement {
    const input: HTMLInputElement = document.createElement('input');
    input.classList.add(mainClass);
    this.addAttributes(input, attributes);
    return input;
  }

  public addAttributes(input: HTMLInputElement, attributes: Record<string, string>): void {
    for (const key in attributes) {
      input.setAttribute(key, attributes[key]);
    }
  }
}

export default Template;
