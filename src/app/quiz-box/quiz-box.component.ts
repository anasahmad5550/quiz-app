import { Component, OnInit, ViewChild } from '@angular/core';
import { AppSetting } from '../appSetting';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-quiz-box',
  templateUrl: './quiz-box.component.html',
  styleUrls: ['./quiz-box.component.css']
})
export class QuizBoxComponent implements OnInit {

  countries_data: any[] = [];
  points: number = 0
  capital: string = ''
  answer: string = ''
  index: number = 0
  answerSelect: boolean = false
  random_countries: Array<string> = ['']
  gameOver: boolean = false
  gameloose: boolean = false
  flag: string = ''

  constructor(private api:GetApiService) { }

  checkAnswer(checkDiv: {country: string, el: HTMLDivElement}){
    if(!this.answerSelect){
      checkDiv.el.style.color = 'white'
      checkDiv.el.style.borderColor = 'transparent'
      this.answerSelect = true
      if (this.answer === checkDiv.country){
        this.points++
        checkDiv.el.style.backgroundColor = '#60BF88'
      }
      else{
        checkDiv.el.style.backgroundColor = '#EA8282'
        this.gameloose = true
      }
    }
  }

  tryAgain() {
    this.points = 0
    this.gameOver = false
    this.index = 0
    this.answerSelect = false
    this.gameloose = false
  }

  nextQuestion(){
    if (this.gameloose){
      this.gameOver = true
    }
    else{
      this.answerSelect = false
      this.index++
      if (this.index % 2 === 0 )
        this.flag = this.countries_data[this.index]['flag']
      else
        this.capital = this.countries_data[this.index]['capital']
      this.answer = this.countries_data[this.index]['name']
      AppSetting.wrong_answers
      const shuffled = AppSetting.wrong_answers.sort(() => 0.5 - Math.random());
      this.random_countries = shuffled.slice(0, 3);
      this.random_countries.push(this.answer)
      this.random_countries = this.random_countries.sort(() => 0.5 - Math.random());
    }
  }

  ngOnInit(){
    this.api.apiCall().subscribe((data: any) => {
      this.countries_data = data
      const shuffled = AppSetting.wrong_answers.sort(() => 0.5 - Math.random());
      this.random_countries = shuffled.slice(0, 3);
      this.flag = data[this.index]['flag']
      this.answer = data[this.index]['name']
      this.random_countries.push(this.answer)
      this.random_countries = this.random_countries.sort(() => 0.5 - Math.random());
    })
  }

}
