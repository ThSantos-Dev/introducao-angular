import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAnimal } from 'src/app/interfaces/IAnimal';

import { ListAnimalsService } from 'src/app/services/list-animals.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent {
  animal?: IAnimal;

  constructor(
    private listAnimalsService: ListAnimalsService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  getAnimal() {
    // Resgatando o id passado pela url e convertendo-o para Number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listAnimalsService
      .getItem(id)
      .subscribe((animal) => (this.animal = animal));
  }
}
