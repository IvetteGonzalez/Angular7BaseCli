import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-table',
  templateUrl: './answer-table.component.html',
  styleUrls: ['./answer-table.component.css']
})
export class AnswerTableComponent implements OnInit {

  tableData:any = {};
    
  constructor() { 

    this.tableData={
    headers:["id", "answer", "source", "questions"],
    infoData:[
        {
            "id": 1,
            "answer": "La creación de una experiencia conversacional de alta calidad requiere un conjunto fundacional de capacidades. Para ello, hemos tenido éxito con la creación de grandes experiencias conversacionales, hemos creado una plantilla ** Enterprise bot template **. Esta plantilla reúne todas las mejores prácticas y los componentes del apoyo que hemos logrado a través de la construcción de experiencias conversacionales. \\ N [Obtenga más información] bot-builder-enterprise-template-overview? view = azure-bot-service-4.0)",
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
            "id": 2,
            "answer": "hola, soy sisi",
            "source": "Editorial",
            "questions": [
                "hola"
            ],
            "metadata": [],
            "alternateQuestions": "",
            "alternateQuestionClusters": [],
            "changeStatus": "Update",
            "kbId": "0b734417-0b7e-4923-b57e-8ec85277d340"
        }

    ],
    tabs: [],
    titles:["ID", "Answer", "Source", "Questions"]}
  }

  ngOnInit() {
  }

}
