import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importação do que vai usar lá na injeção do app-root
import { appC } from './app.component';
import { ItemTesteComponent } from './item-teste/item-teste.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppHeader } from './header/header.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { AppFooter } from './footer/footer.component';
import { AppMain } from './main/main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ExperienciaComponent } from './experiencia/experiencia.component';


@NgModule({
  declarations: [
    appC,
    ItemTesteComponent,
    ItemDetailComponent,
    AppHeader,
    AppFooter,
    AppMain,
    ItemOutputComponent,
    ExperienciaComponent,
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [appC],
})
export class AppModule { }
