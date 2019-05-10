import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AppDialogNewItemComponent } from '../../components/app-dialog-new-item/app-dialog-new-item.component';
import { AppDialogContenComponent } from '../../components/app-dialog-conten/app-dialog-conten.component';
import { AppDialogEditComponent } from '../../components/app-dialog-edit/app-dialog-edit.component';


const dialogConfig = new MatDialogConfig();

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
    console.log("answer",event.answer);
    console.log("question",event.question);

    const dialogRef = this.dialog.open(AppDialogEditComponent,{
      data:{answer:event.answer,question:event.question},
    });


    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    });
  }

  deleteRow(event){
   
    const dialogRef = this.dialog.open(AppDialogContenComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result delete: ${result}`);
      
      

    });
  }
}



