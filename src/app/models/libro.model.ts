
//OBJETO LIBROS
export class libros{
    id:number;
    titulo:string;
    publicado:number;
    imagen:string;
    escritor:number;


    constructor(pid:number,ptitulo:string,ppublicado:number,pimagen:string,pescritor:number){
      this.id=pid;
      this.titulo=ptitulo;
      this.publicado=ppublicado;
      this.imagen=pimagen;
      this.escritor=pescritor;

    }

}