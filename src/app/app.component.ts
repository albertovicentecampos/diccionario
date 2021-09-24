import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationService } from './shared/services/animation/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diccionario';
  animacion: boolean = false; 
  piePagina: boolean = true; 
  url: string | null; 
  constructor(private animationService: AnimationService, private route: Router){
    animationService.an.subscribe(p=>{
      this.animacion = p; 
    })

    this.route.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        // event is an instance of NavigationEnd, get url!  
        this.url = event.urlAfterRedirects;
        console.log('url is', this.url);

        localStorage.setItem('link', this.url)
      }
    })

    this.url = localStorage.getItem('link');
    console.log('url is', localStorage.getItem('link'));
      
    
  }

}
