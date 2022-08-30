import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  @Input('countriesChoices') countriesChoices:Array<string> = []
  @Input('answerSelected') answerSelected = false;
  @Input('answer') answer: string = ''
  @Output() country = new EventEmitter<{country:string,el: HTMLDivElement}>()
  constructor() { }

  ngOnInit(): void {
  }

  getClass(option: string)  {
    if(this.answerSelected && this.answer == option){
      return 'answer-box-correct'
    }
    else
    return 'answer-box'
  }
  checkAns(country: string, el: HTMLDivElement){
     this.country.emit({country,el})
  }
}
