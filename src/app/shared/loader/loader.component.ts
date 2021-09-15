import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show = false; 
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(delay(2000)).subscribe(event => {
      this.show = event instanceof NavigationStart
      console.log(this.show)
      if (event instanceof NavigationStart){
        console.log("entra")
        this.show = true
      }else if(event instanceof NavigationEnd ){
        console.log("se va")
        this.show = false
      }
    })
  }

}
