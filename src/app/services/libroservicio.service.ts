import { Injectable } from '@angular/core';



//importamos el arry con el que vamos a trabjar
import { LIBROS } from '../db/libros.db';
//importamos el modelo
import { libros } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroservicioService {

  constructor() { }
getidlibro(){
  return LIBROS;
}
  getidescritor(escritoresid: number): Promise<libros[]> {
    return new Promise((resolve, reject) => {
      const arrayfiltrado: any = LIBROS.filter(libros => {
        return libros.escritor == escritoresid;
      });
      resolve(arrayfiltrado);
    });
  }
}