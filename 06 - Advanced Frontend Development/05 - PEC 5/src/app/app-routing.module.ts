import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './components/beer/beer.component';
import { BeersComponent } from './components/beers/beers.component';

const routes: Routes = [
  { path: '', component: BeersComponent },
  { path: 'beer/:id', component: BeerComponent },
  { path: '**', component: BeersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
