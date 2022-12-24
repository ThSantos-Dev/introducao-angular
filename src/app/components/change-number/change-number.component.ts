import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent {
  // @Output() - para enviar algo (se for só dados, utiliza sozinho)
  // EventEmitter - quando é executado nos eventos
  @Output() changeNumber: EventEmitter<MouseEvent> = new EventEmitter();

  handleClick(): void {
    this.changeNumber.emit()
  }
}
