import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {
  // As propriedades são como os states, somente é exibido

  name: string = "Thales Santos";
  info = {
    nome: "Thales",
    idade: 20,
    profissao: "Desenvolvedor",
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Typescript",
      "AWS Foundation",
      "Angular (estudando)",
      ""
    ]
  }

  constructor() {}

  ngOnInit(): void {}
}
