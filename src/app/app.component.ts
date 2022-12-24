import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aula_01_introducao';
  userName = 'Thales Santos';
  userData = {
    email: 'Tales_silvasantos02@hotmail.com',
    role: 'admin',
  };
}
