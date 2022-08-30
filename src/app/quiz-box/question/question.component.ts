import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('questionNumber') questionNumber:number = 0
  @Input('capital') capital:string = ''
  @Input('flag') flag:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
