import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../services/escritores.service';
import { escritor } from '../models/escritor.model';

@Component({
  selector: 'app-listaescritores',
  templateUrl: './listaescritores.component.html',
  styleUrls: ['./listaescritores.component.css']
})
export class ListaescritoresComponent implements OnInit {
  //se debe crear un variable men caso de querer utilizarla en el html
  public arrescritores: escritor[];

  constructor(private _servicioescritores: EscritoresService) {
    this.arrescritores = this._servicioescritores.getall();
  }


  async ngOnInit() {
    //safcarlo de forma normal
    //this._servicioescritores.getall();
    //usandolo de forma promesa sin el async
    //  this._servicioescritores.getallpromise().then(escritores=>{
    //    this.arrescritores=escritores;
    //  })
    this.arrescritores = await this._servicioescritores.getallpromise();
  }

  //METODO DE SELECCION ONCHANGE
  //any tipado tipo de dato desconocido
  async onChange($event: any) {
    //  console.log($event.target.value);
    if ($event.target.value == 'todos') {
      this.arrescritores = await this._servicioescritores.getallpromise();
    } else {
      this.arrescritores = await this._servicioescritores.getbaypais($event.target.value);
    }
  }



}
