import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent {
  // @Input() semelhante a Props, é dessa forma que os dados são passados para um component filho
  @Input() name: string = '';
  @Input() userData!: { email: string; role: string };

  constructor() {}
}
