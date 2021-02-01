import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import Wine from '../model/wine';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css'],
})
export class WineNewComponent implements OnInit {
  @Output() private wineCreated: EventEmitter<void> = new EventEmitter();

  public message = '';
  public wineForm!: FormGroup;

  constructor(private builder: FormBuilder, private wineService: WineService) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.wineForm = this.builder.group({
      name: [
        '',
        [
          Validators.required,
          this.validateName(['Laya', 'K-Naina', 'Verdejo', 'Monastrell']),
        ],
      ],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?:[a-z0-9-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpg|gif|png)$'
          ),
        ],
      ],
      isOnSale: false,
    });
  }

  private validateName(validNames: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
      const name: string = control.value;
      const isValid = validNames.includes(name);
      return isValid ? null : { name: validNames };
    };
  }

  createWine(wineForm: FormGroup) {
    if (wineForm.invalid) {
      this.message = 'CHECK ERRORS';
      console.log(this.message);
    } else {
      const wine: Wine = wineForm.value;
      this.wineService.createWine(wine).subscribe((res) => {
        this.wineCreated.next();
      });
    }
  }
}
