import { IPointWeightChart, IParamsWeightChart } from "../types/index";

export default class WeightChartComponent {
  private className: string;
  private mainClass: string;
  private chartColor: string;
  private data: IPointWeightChart[];
  private step = 40;

  constructor({ className, data }: IParamsWeightChart) {
    this.className = className || "";
    this.mainClass = "weight-chart";
    this.chartColor = "#e93478";
    this.data = data;
  }

  public getChart(): HTMLElement {
    const wrap: HTMLElement = this.getWrap();
    const canvas: HTMLCanvasElement = this.getCanvas();
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (!ctx) {
      return wrap;
    }
    this.renderChart(ctx, this.data);

    const left: HTMLElement = this.getLeftValues(this.data);
    wrap.append(left, canvas);
    return wrap;
  }

  private getWrap(): HTMLElement {
    const wrap: HTMLElement = document.createElement("div");
    wrap.classList.add(this.mainClass);
    if (this.className) {
      wrap.classList.add(this.className);
    }
    return wrap;
  }

  private getLeftValues(data: IPointWeightChart[]): HTMLElement {
    const block: HTMLElement = document.createElement("div");
    block.classList.add(`${this.mainClass}__left`);
    const weightList: number[] = data
      .reduce((acc: number[], current: IPointWeightChart) => {
        return [...acc, current.weight];
      }, [])
      .sort((a, b) => b - a);
    const items: HTMLElement[] = weightList.map((item: number) => {
      const el: HTMLElement = document.createElement("div");
      el.classList.add(`${this.mainClass}__value`);
      el.textContent = item.toString();
      return el;
    });
    block.append(...items);
    return block;
  }

  private getCanvas(): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.classList.add(`${this.mainClass}__canvas`);
    canvas.style.height = this.step * 4 + "px";
    canvas.style.width = this.getWidth(this.data) + "px";
    return canvas;
  }

  private renderChart(
    ctx: CanvasRenderingContext2D,
    data: IPointWeightChart[]
  ): void {
    ctx.strokeStyle = this.chartColor;
    ctx.lineWidth = 0.8;
    const { min, max } = this.getMinMaxWeight(data);
    const startX = this.step;
    const startY = ((data[0].weight - min) * 100) / (this.step * 4);
    console.log(startY);
    ctx.moveTo(startX, startY);
    data.slice(1).forEach((point, index) => {
      const y = this.step * 4 - point.weight + min;
      const x = (index + 2) * this.step;
      ctx.lineTo(x, y);
    });

    ctx.stroke();
  }

  private getHeight(data: IPointWeightChart[]): number {
    const { min, max } = this.getMinMaxWeight(data);
    return max - min;
  }

  private getWidth(data: IPointWeightChart[]): number {
    let min: Date = data[0].date;
    let max: Date = data[0].date;

    data.forEach((item: IPointWeightChart) => {
      if (item.date < min) {
        min = item.date;
      }

      if (item.date > max) {
        max = item.date;
      }
    });

    const timeDiff = Math.abs(max.getTime() - min.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays * this.step + this.step * 2;
  }

  private getMinMaxWeight(
    data: IPointWeightChart[]
  ): { min: number; max: number } {
    let min: number = data[0].weight;
    let max: number = data[0].weight;

    data.forEach((item: IPointWeightChart) => {
      if (item.weight < min) {
        min = item.weight;
      }

      if (item.weight > max) {
        max = item.weight;
      }
    });

    return { min, max };
  }
}
