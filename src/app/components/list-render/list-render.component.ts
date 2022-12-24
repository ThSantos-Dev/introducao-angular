import { Component } from '@angular/core';
import { IAnimal } from './../../interfaces/IAnimal';

import { ListAnimalsService } from 'src/app/services/list-animals.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  // animals: IAnimal[] = [
  //   { name: 'Spike', type: 'dog', age: 12 },
  //   { name: 'Bob', type: 'dog' },
  //   { name: 'Lindsey', type: 'horse' },
  //   { name: 'Bunny', type: 'cat', age: 7 },
  //   { name: 'Buck', type: 'fish' },
  // ];

  animals: IAnimal[] = [];

  // animal: IAnimal = { name: 'Spike', type: 'dog', age: 12 };

  animalDetails: string = '';

  // Passo a service no construtor para que assim que o component ser ativado, seja instanciado um objeto de ListAnimalsService - equivalente ao useEffect(() => {}, [])
  constructor(private listAnimalsService: ListAnimalsService) {
    this.getAnimals();
  }

  showAge(animal: IAnimal): void {
    if (animal.age)
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos.`;
    else this.animalDetails = `O pet ${animal.name} não informou a idade.`;
  }

  removeAnimal(animal: IAnimal): void {
    console.log(`Removing ${animal.name}`);
    this.animals = this.animals.filter((item) => animal.name !== item.name);
    this.listAnimalsService.remove(animal.id).subscribe();
  }

  getAnimals() {
    // O subscribe funciona como o .then da Promise, só que é no formato do Angular
    this.listAnimalsService
      .getAll()
      .subscribe((animals) => (this.animals = animals));
  }
}
