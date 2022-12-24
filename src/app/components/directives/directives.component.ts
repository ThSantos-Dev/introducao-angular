import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  font: string = "Arial";
  size: number = 14;
  color: string = "red";

  classList: string[] = ["firts-class", 'second-class', 'more-class', 'green-title']
  underline_title: string = "underline-title";
}
