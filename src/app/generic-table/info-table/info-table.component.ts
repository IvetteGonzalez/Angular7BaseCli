import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AppDialogContenComponent } from '../../components/app-dialog-conten/app-dialog-conten.component';
import { AppDialogEditComponent } from '../../components/app-dialog-edit/app-dialog-edit.component';




@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.css']
})
export class InfoTableComponent implements OnInit {
 @Input('columns') displayedColumns: string[];
 @Input('info') dataSourceTable :any[];
 @Input('titles') displayTitles: string[];

 @Output('selected-item') item = new EventEmitter<any>();

 
  rootTable:string;
  rootUsers:string;
  columns:string[] = ["id", "answer", "source", "questions"];
  answerArray:string[];
  questionArray:string[];
  instructions = [];

  constructor( private route: ActivatedRoute,
               private _router: Router, 
               public dialog: MatDialog ) {

     this.rootTable = this._router.url.toString();
     this.rootUsers = '/home/usuarios'; 
     
  }

  ngOnInit() {
    this.displayedColumns.push("edit","remove");
  }

  ngAfterContentInit(){}

  selectedItem(event){
    this.item.emit( event );
  }

  editRow(event){
    const dialogRef = this.dialog.open(AppDialogEditComponent,{ 
      data : event,
    });
    dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
         if(result){
          console.log(`Gurda: ${event.answer}`);
        }
    });
  }

  deleteRow(event){
    const dialogRef = this.dialog.open(AppDialogContenComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result delete: ${result}`);
    });
  }
}



