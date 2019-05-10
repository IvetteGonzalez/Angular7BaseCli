import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-dialog-edit',
  templateUrl: './app-dialog-edit.component.html',
  styleUrls: ['./app-dialog-edit.component.css']
})
export class AppDialogEditComponent implements OnInit {

 
  filter:string;
  inputs:any[] = [];
  question:any[] = [];
  idsInputs:any[]=[];
  
  constructor(
    private _dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ) {
      this.inputs=data.answer;
      this.question = data.questions;             
  }

  ngOnInit() {      
   
  }
  

}
