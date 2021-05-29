//rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaescritoresComponent } from './listaescritores/listaescritores.component';
import {DetalleComponent}from'./detalle/detalle.component';
import {ListalibrosComponent} from './listalibros/listalibros.component'

const routes: Routes = [
  //aqui van las rutas de la url
  { path: '', pathMatch: 'full', redirectTo: '/escritores' },
  { path: 'escritores', component: ListaescritoresComponent },
  //para el manejo luego de los slash se debe usar el /: y el nombre de la variable la cual podemos atraer
  {path:'escritores/:escritorid', component: DetalleComponent,children:[
{path:'libros',component:ListalibrosComponent}
  ] },
  //las rutas hijas se uyitlizan mediante la propiedad children
  { path: '**', redirectTo: '/escritores' }
  //UBICAMOS LAS RUTAS TENIENDO EN CUENTA LA INCIIAL Y LA FIAL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
