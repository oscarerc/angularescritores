import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { escritor } from '../models/escritor.model';
@Injectable({
  providedIn: 'root'
})
export class EscritoresService {
  escritorid:number;

  constructor() {
    this.escritorid= 0;
   }

  //escritor es el array que se basa en el modelo como formato y ESCRITOR es el array con los datos
  getall(): escritor[] {
    return ESCRITORES;
  }

  //OTRA FORMA DE TRAER LOS ESCRITORES MEDIANTE PROMESAS
  getallpromise(): Promise<escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  //FILTRADO POR PAISES
  getbaypais(ppais: string): Promise<escritor[]> {
    return new Promise((resolve, reject) => {
      //acedemos a la bd y traemos la informacion con el fin de validartle
      const arrfiltrado = ESCRITORES.filter(escritor => {
        return escritor.pais === ppais;
      });
      resolve(arrfiltrado);
    });
  }

  //FOLTRADO POR ID


  getbayid(escritorid:number): Promise<escritor[]> {
    return new Promise((resolve, reject) => {
      //acedemos a la bd y traemos la informacion con el fin de validartle
      const escritorfound:any = ESCRITORES.find(escritor => {
        return escritor.id === escritorid;
      });
      resolve(escritorfound);
    });
  }



   getid(escritorid:number):escritor{
     const per:any = ESCRITORES.find(escritor => {
      return escritor.id == escritorid;
     });
     return per;
   
  }

}




