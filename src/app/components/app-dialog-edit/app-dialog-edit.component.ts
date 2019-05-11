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
  inputs:any[];
  question: any[];
  idsInputs:any[]=[];
  answer:any[];

  data1:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
   ) {
      console.log("data",data.answer);
      console.log("data 2",data.questions);
      data.answer = [data.answer];

  }

  ngOnInit() {      
   
  }
  

addTodo(event){
    console.log('guardas I',event);
  }

}
