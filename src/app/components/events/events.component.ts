import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  count: number = 0;
  canShowMessage: boolean = true;

  incrementCount(): void {
    this.count++;
  }

  decrementCount(): void {
    this.count--;
  }

  showMessage(): void {
    this.canShowMessage = !this.canShowMessage;
  }
}
