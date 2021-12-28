import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {

  @Input('gamePoints') points:number = 0
  @Output() tryAgain = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  tryAgainGame(){
    this.tryAgain.emit()
  }
}
