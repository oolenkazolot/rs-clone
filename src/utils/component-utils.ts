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

export function onOpenModal(id: string): () => void {
  return () => {
    const modal: HTMLElement | null = document.getElementById(id);
    if (!modal) {
      return;
    }
    modal.classList.add("open");
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
