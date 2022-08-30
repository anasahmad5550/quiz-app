import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input('country') countryName: string = ''
  @Input('questionNumber') questionNumber:number = 0 
  constructor() { }

  ngOnInit(): void {
  }

}
