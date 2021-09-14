export class Usuario {
    id: number;
    nombreUsuario:string;
    password:string;

    constructor(nUsuario:string, pass:string){
        this.nombreUsuario = nUsuario;
        this.password = pass;
    }

}