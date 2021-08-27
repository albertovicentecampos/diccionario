import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NuevaEspanolComponent } from '../nueva-espanol/nueva-espanol.component';

@Component({
  selector: 'app-inicio-espanol',
  templateUrl: './inicio-espanol.component.html',
  styleUrls: ['./inicio-espanol.component.scss']
})
export class InicioEspanolComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NuevaEspanolComponent, {
      height: '300px',
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }


}
