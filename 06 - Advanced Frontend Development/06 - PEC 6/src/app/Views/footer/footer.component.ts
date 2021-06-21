import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public currentYear: string;

  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(): void {
    // Se actualiza en el footer el año actual
    this.currentYear = new Date().getFullYear().toString();
  }
}
