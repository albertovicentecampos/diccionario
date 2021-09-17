import { Component } from '@angular/core';
import { AnimationService } from './shared/services/animation/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diccionario';
  animacion: boolean = false; 
  constructor(private animationService: AnimationService){
    animationService.an.subscribe(p=>{
      this.animacion = p; 
    })
  }

}
