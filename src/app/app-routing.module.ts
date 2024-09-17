import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const routes: Routes = [
  {path: 'Sobre', component:ItemOutputComponent},
  {path: 'Experiencias', component:ItemDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
