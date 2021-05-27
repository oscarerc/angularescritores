import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { escritor } from '../models/escritor.model';
@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  //escritor es el array que se basa en el modelo como formato y ESCRITOR es el array con los datos
  getall(): escritor[] {
    return ESCRITORES;
  }
}
