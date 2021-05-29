import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaescritoresComponent } from './listaescritores/listaescritores.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListalibrosComponent } from './listalibros/listalibros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaescritoresComponent,
    DetalleComponent,
    ListalibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
