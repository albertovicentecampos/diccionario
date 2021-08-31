export interface Espanol {
    id: number; 
    palabra: string; 
    descripcion: string;
    fechaAlta: Date; 
    fechaModificacion: Date; 
    palabrasIngles: Ing[];
}


export interface Ing { 
    id: number;
    palabra: string; 
    palabraEspanol: string;
    fechaAlta: Date; 
    fechaModificacion: Date; 
}
export function inicializar(): Espanol {

    const aux = {
        id : null,
        palabra: null,
        descripcion: null,
        fechaAlta: null,
        fechaModificacion: null,
        palabrasIngles: null
    };
    return Object.assign(aux);
}