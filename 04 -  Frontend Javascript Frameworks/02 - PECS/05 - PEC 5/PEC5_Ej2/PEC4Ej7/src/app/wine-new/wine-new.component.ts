import { Component, OnInit } from '@angular/core';
import Wine from '../model/wine';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css'],
})
export class WineNewComponent implements OnInit {
  public message = '';
  public wine!: Wine;
  constructor() {}

  ngOnInit(): void {}

  newWine(wineForm: { value: { wine: Wine }; invalid: boolean | null }) {
    //? invalid no deberia ser bool?
    if (wineForm.invalid) {
      this.message = 'CHECK FORM ERRORS';
      console.log(this.message);
    } else {
      this.wine = wineForm.value.wine;
      console.log('Creating a New Wine... ', this.wine);
    }
  }
}
