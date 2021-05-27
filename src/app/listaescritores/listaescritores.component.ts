import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../services/escritores.service';
import {escritor} from '../models/escritor.model';


@Component({
  selector: 'app-listaescritores',
  templateUrl: './listaescritores.component.html',
  styleUrls: ['./listaescritores.component.css']
})
export class ListaescritoresComponent implements OnInit {
  //se debe crear un variable men caso de querer utilizarla en el html
  public arrescritores:escritor[];

constructor(private _servicioescritores: EscritoresService) {
  this.arrescritores = this._servicioescritores.getall();
}


ngOnInit(): void {
 this._servicioescritores.getall();
}

}
