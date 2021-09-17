import { Injectable, Output,  EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  animacion: boolean = false; 
  an: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  realizarAnimacion(){

    this.animacion =! this.animacion; 
    this.an.emit(this.animacion)

    setTimeout(()=>{                           
      this.animacion =! this.animacion;
      this.an.emit(this.animacion)
  }, 3000);
  }

}
