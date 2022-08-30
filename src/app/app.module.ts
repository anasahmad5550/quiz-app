import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RendererHighlightDirective } from './Directives/renderer-highlight.directive';
import { QuizBoxComponent } from './quiz-box/quiz-box.component';
import { QuestionComponent } from './quiz-box/question/question.component';
import { AnswerListComponent } from './quiz-box/answer-list/answer-list.component';
import { AnswerComponent } from './quiz-box/answer-list/answer/answer.component';
import { GameResultComponent } from './quiz-box/game-result/game-result.component';
@NgModule({
  declarations: [
    AppComponent,
    RendererHighlightDirective,
    QuizBoxComponent,
    QuestionComponent,
    AnswerListComponent,
    AnswerComponent,
    GameResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
