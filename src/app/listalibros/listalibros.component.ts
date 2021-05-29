import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroservicioService } from '../services/libroservicio.service'
import { libros } from '../models/libro.model';

@Component({
  selector: 'app-listalibros',
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.css']
})
export class ListalibrosComponent implements OnInit {

  public libross: libros[];

  constructor(private _serviciolibro: LibroservicioService, private activateroute: ActivatedRoute) {

    this.activateroute.parent?.params.subscribe(async params => {
      this.libross = await this._serviciolibro.getidescritor(parseInt(params.escritoresid));
    });

    this.libross = this._serviciolibro.getidlibro();
  }

  ngOnInit(): void {
    //debemos traer el valor de la url para eso importamos el ActivatesRoute
    this.activateroute.parent?.params.subscribe(async params => {
      this.libross = await this._serviciolibro.getidescritor(parseInt(params.escritorid));
      console.log(this.libross);
    });

  }

}
