export function addClasses(
  element: HTMLElement,
  classes: string[] | undefined
): void {
  if (!classes) {
    return;
  }
  classes.forEach((className) => {
    element.classList.add(className);
  });
}

export function onOpenModal(
  idOpenModal: string,
  idCloseModal?: string
): (e?: Event) => void {
  return (e?: Event) => {
    if (e) {
      e.preventDefault();
    }

    if (idCloseModal) {
      onCloseModal(idCloseModal)();
    }
    const modal: HTMLElement | null = document.getElementById(idOpenModal);
    if (!modal) {
      return;
    }
    if (idCloseModal) {
      setTimeout(() => {
        modal.classList.add("open");
      }, 500);
    } else {
      modal.classList.add("open");
    }
  };
}

export function onCloseModal(id: string): () => void {
  return () => {
    const modal: HTMLElement | null = document.getElementById(id);
    if (!modal) {
      return;
    }
    modal.classList.remove("open");
  };
}
