import { IPointWeightChart, IParamsWeightChart } from '../types/index';

export default class WeightChartComponent {
  private className: string;
  private mainClass: string;
  private chartColor: string;
  private data: IPointWeightChart[];
  private step: number = 40;

  constructor({ className, data }: IParamsWeightChart) {
    this.className = className || '';
    this.mainClass = 'weight-chart';
    this.chartColor = '#e93478';
    this.data = data;
  }

  public getChart(): HTMLElement {
    const wrap: HTMLElement = this.getWrap();
    const canvas: HTMLCanvasElement = this.getCanvas();
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return wrap;
    }
    this.renderChart(ctx, this.data);
    wrap.append(canvas);
    return wrap;
  }

  private getWrap(): HTMLElement {
    const wrap: HTMLElement = document.createElement('div');
    wrap.classList.add(this.mainClass);
    if (this.className) {
      wrap.classList.add(this.className);
    }
    return wrap;
  }

  private getCanvas(): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.classList.add(`${this.mainClass}__canvas`);
    canvas.style.height = this.getHeight(this.data) + 'px';
    canvas.style.width = this.getWidth(this.data) + 'px';
    return canvas;
  }

  private renderChart(ctx: CanvasRenderingContext2D, data: IPointWeightChart[]): void {
    ctx.strokeStyle = this.chartColor;
    ctx.lineWidth = 0.8;
    const startX = 0;
    const startY = 0;
    ctx.moveTo(startX, startY);
    ctx.lineTo(100, 75);
    ctx.stroke();
  }

  private getHeight(data: IPointWeightChart[]): number {
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

    return max - min + this.step * 2;
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
}
