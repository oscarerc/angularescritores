//  OBJETO TIUPO ESCRITOR

export class escritor{
    
id:number;
nombre:string;
apellidos:string;
imagen:string;
pais:string;

constructor(pid:number,pnombre:string,papellidos:string,pimagen:string,ppais:string){
    this.id=pid;
    this.nombre=pnombre;
    this.apellidos=papellidos;
    this.imagen=pimagen;
    this.pais=ppais;

}

}