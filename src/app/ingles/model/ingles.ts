
export interface Ingles {
    id: number;
    palabra: string;
    palabraEspanol: string;
    fechaAlta: Date;
    fechaModificacion: Date;
}

export function inicializar(): Ingles {

    const aux = {
        id: null,
        palabra: null,
        palabraEspanol: null,
        fechaAlta: null,
        fechaModificacion: null
    };
    return Object.assign(aux);
}