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
