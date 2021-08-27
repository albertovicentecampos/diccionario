import { Espanol } from "src/app/espanol/model/espanol";

export interface Ingles { 
    id: number; 
    palabra: string; 
    palabraEspanol: string; 
    fechaAlta: Date; 
    fechaModificacion: Date; 
    //Falta la lista de palabras en español 
}