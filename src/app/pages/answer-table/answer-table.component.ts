import { Component, OnInit } from '@angular/core';
import { InfoTableComponent } from '../../generic-table/info-table/info-table.component';
import { PATH_FINNING } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-answer-table',
  templateUrl: './answer-table.component.html',
  styleUrls: ['./answer-table.component.css']
})
export class AnswerTableComponent implements OnInit {

  tableData:any = {};
  oInfoData:any=[];
  constructor(
    private http:HttpClient
  ) { 
 
    this.tableData={
    headers:["id", "answer", "source", "questions"],
    infoData:this.oInfoData,
    tabs: [],
    titles:["ID", "Answer", "Source", "Questions"]}
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){ 
    let url =`${PATH_FINNING.DOMAIN}${PATH_FINNING.GET_INFO}`   
    this.oInfoData=[];
     this.http.get(url).subscribe((data: any) => {
     this.tableData.infoData= data.qnaDocuments;
    });

  }
 
}
