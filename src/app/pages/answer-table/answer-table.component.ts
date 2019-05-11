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
  numRow:any;

  info = [
    {
        "id": 1,
        "answer": "La creación de una experiencia conversacional de alta calidad requiere un conjunto fundacional de capacidades.",
        "source": "custom editorial",
        "questions": [
            "¿Qué es el Enterprise bot template?",
            "¿Qué es la plantilla de bot de Enterprise?"
        ],
        "metadata": [],
        "alternateQuestions": "",
        "alternateQuestionClusters": [],
        "changeStatus": "Update",
        "kbId": "0b734417-0b7e-4923-b57e-8ec85277d340"
    },{
        "id": 2,
        "answer": "Para ello, hemos tenido éxito con la creación de grandes experiencias conversacionales, hemos creado una plantilla **",
        "source": "custom editorial",
        "questions": [
            "¿Qué es el Enterprise bot template?",
            "¿Qué es la plantilla de bot de Enterprise?"
        ],
        "metadata": [],
        "alternateQuestions": "",
        "alternateQuestionClusters": [],
        "changeStatus": "Update",
        "kbId": "0b734417-0b7e-4923-b57e-8ec85277d340"
    },{
        "id": 3,
        "answer": "hemos creado una plantilla **",
        "source": "custom editorial",
        "questions": [
            "¿Qué es el Enterprise bot template?",
            "¿Qué es la plantilla de bot de Enterprise?"
        ],
        "metadata": [],
        "alternateQuestions": "",
        "alternateQuestionClusters": [],
        "changeStatus": "Update",
        "kbId": "0b734417-0b7e-4923-b57e-8ec85277d340"
    },
    {
      "id": 4,
      "answer": "hemos creado una plantilla **",
      "source": "custom editorial",
      "questions": [
          "¿Qué es el Enterprise bot template?",
          "¿Qué es la plantilla de bot de Enterprise?"
      ],
      "metadata": [],
      "alternateQuestions": "",
      "alternateQuestionClusters": [],
      "changeStatus": "Update",
      "kbId": "0b734417-0b7e-4923-b57e-8ec85277d340"
  },{
    "id": 5,
    "answer": "hemos creado una plantilla **",
    "source": "custom editorial",
    "questions": [
        "¿Qué es el Enterprise bot template?",
        "¿Qué es la plantilla de bot de Enterprise?"
    ],
    "metadata": [],
    "alternateQuestions": "",
    "alternateQuestionClusters": [],
    "changeStatus": "Update",
    "kbId": "0b734417-0b7e-4923-b57e-8ec85277d340"
}
  ];

  constructor(
    private http:HttpClient
  ) { 
 
    this.tableData={
    headers:["id", "answer", "source", "questions"],
    infoData:this.info,
    tabs: [],
    titles:["ID", "Answer", "Source", "Questions"]
    }

    this.numRow = this.info.length;
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
