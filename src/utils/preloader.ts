export function activePreloader(element: HTMLElement): void {
  element.classList.add("loaded_hiding");
  setTimeout(function () {
    element.classList.add("loaded");
    element.classList.remove("loaded_hiding");
  }, 500);
}
