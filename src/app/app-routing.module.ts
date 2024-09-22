import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppMain } from './main/main.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';


const routes: Routes = [
  {path: 'Sobre', component:AppMain },
  {path: 'Experiencias', component:ExperienciaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
