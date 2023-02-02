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

  public createLink(myClass: string, href: string): HTMLAnchorElement {
    const newElem: HTMLAnchorElement = document.createElement("a");
    newElem.classList.add(myClass);
    newElem.href = href;
    return newElem;
  }

  public createBtn(
    myClass: string,
    content: string,
    myClassTwo?: string,
    myClassThree?: string
  ): HTMLButtonElement {
    const btn: HTMLButtonElement = document.createElement("button");
    btn.classList.add(myClass);
    if (myClassTwo) {
      btn.classList.add(myClassTwo);
    }
    if (myClassThree) {
      btn.classList.add(myClassThree);
    }
    btn.textContent = content;
    return btn;
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
