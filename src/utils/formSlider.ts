export interface IFormSlider {
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (currentSlideNum: number) => () => void;
  setContainer: (element: HTMLElement) => void;
  setPrevBtn: (element: HTMLElement) => void;
  setNextBtn: (element: HTMLElement) => void;
  setPointerContainer: (element: HTMLElement) => void;
}

export interface IFormSliderParams {
  slideCount: number;
  htmContainer?: HTMLElement;
  prevBtn?: HTMLElement;
  nextBtn?: HTMLElement;
  pointContainer?: HTMLElement;
}

export function formSlider({
  slideCount,
  htmContainer,
  prevBtn,
  nextBtn,
  pointContainer,
}: IFormSliderParams): IFormSlider {
  let slideNum = 0;

  const moveSlider = (index: number): void => {
    if (!htmContainer) {
      return;
    }
    htmContainer.style.transform = `translateX(-${index * 100}%)`;
    checkPrevButton();
    checkNextButton();
    changeActivePoints();
  };

  const changeActivePoints = (): void => {
    if (!pointContainer) {
      return;
    }

    const points: HTMLCollection = pointContainer.children;
    let i = 0;
    for (const point of points) {
      updatePointClass(point, i);
      i++;
    }
  };

  const updatePointClass = (point: Element, num: number): void => {
    if (num === slideNum) {
      point.classList.add("active");
    } else {
      point.classList.remove("active");
    }
  };

  const checkPrevButton = (): void => {
    if (!prevBtn) {
      return;
    }
    if (slideNum === 0) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }
  };

  const checkNextButton = (): void => {
    if (!nextBtn) {
      return;
    }
    if (isLastSlide()) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  };

  const isLastSlide = (): boolean => {
    return slideNum + 1 >= slideCount;
  };

  const nextSlide = (): void => {
    if (isLastSlide()) {
      return;
    }
    slideNum += 1;
    moveSlider(slideNum);
  };

  const prevSlide = (): void => {
    if (slideNum - 1 < 0) {
      return;
    }
    slideNum -= 1;
    moveSlider(slideNum);
  };

  const goToSlide = (currentSlideNum: number): (() => void) => {
    return (): void => {
      if (slideNum < 0 || slideNum >= slideCount) {
        return;
      }

      slideNum = currentSlideNum;
      moveSlider(slideNum);
    };
  };

  const setContainer = (element: HTMLElement): void => {
    htmContainer = element;
  };

  const setPrevBtn = (element: HTMLElement): void => {
    prevBtn = element;
    checkPrevButton();
  };
  const setNextBtn = (element: HTMLElement): void => {
    nextBtn = element;
    checkNextButton();
  };
  const setPointerContainer = (element: HTMLElement): void => {
    pointContainer = element;
    changeActivePoints();
  };

  return {
    nextSlide,
    prevSlide,
    goToSlide,
    setContainer,
    setPrevBtn,
    setNextBtn,
    setPointerContainer,
  };
}
