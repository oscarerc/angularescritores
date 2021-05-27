//rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaescritoresComponent } from './listaescritores/listaescritores.component';

const routes: Routes = [
  //aqui van las rutas de la url
  { path: '', pathMatch: 'full', redirectTo: '/escritores' },
  { path: 'escritores', component: ListaescritoresComponent },
  { path: '**', redirectTo: '/escritores' }
  //UBICAMOS LAS RUTAS TENIENDO EN CUENTA LA INCIIAL Y LA FIAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
