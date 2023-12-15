import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.less']
})
export class MonthViewComponent implements OnInit{

  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

  selectedMonth = 3

  percentage = 0

  color: string = '#dc0d58';

  radius = 80
  axis = 100

  ngOnInit() {
    this.calculatePercentage();
  }

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get dashoffset(): number {
    return this.circumference * (1 - this.percentage / 100);
  }

  handleMonthClicked(month: number) {
    this.selectedMonth = month;

    this.calculatePercentage();
  }

  private calculatePercentage() {
    this.percentage = (100 / 12) * this.selectedMonth;
  }
}
