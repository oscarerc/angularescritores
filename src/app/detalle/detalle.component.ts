import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { escritor } from '../models/escritor.model';
import { EscritoresService } from '../services/escritores.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public personaescritor:any;

  //para poder utilizar el manejo de las rutas se debe hacer lo siguiente:
  //recuperar la parte variable de la url
  constructor(private activateRoute: ActivatedRoute, private _servicioescritores: EscritoresService) {

    this.activateRoute.params.subscribe(async params => {
      this.personaescritor =await this._servicioescritores.getid(params.escritorid);
    });
   
  }


  ngOnInit(): void {
    //para manejar las variables de las rutas utilizamos el params para traer el valor y seguidamente 
    //utilizqamos el subscribe ya que esto es un observable y con un metoodo de callback params=>
     this.activateRoute.params.subscribe(async params => {
      await this._servicioescritores.getbayid(parseInt(params.escritorid));
      console.log(params.escritorid);
    //       await this._servicioescritores.getid(params.escritorid);
    });


  }


}
