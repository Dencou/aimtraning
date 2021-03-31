import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { interval, throwError, timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-mainaimtraning',
  templateUrl: './mainaimtraning.component.html',
  styleUrls: ['./mainaimtraning.component.scss']
})
export class MainaimtraningComponent implements OnInit {

  /*Creates the grid where the point will be*/
  grid = [...Array(20)].map(column => [...Array(20).fill(0)]);
  
  timer = interval(10);

  starttimer = this.timer.pipe(take(2))

  constructor(private gameService: GameService) {}
  ngOnInit() {
    console.log(this.starttimer)
    console.log(this.grid);
    this.grid[0][1] = 1;
  }
  /*bring the point counter from the service*/
  get points(){
    return this.gameService.$points
  }


  /* check if the button was clicked in time*/
  checked(rowIdx, colIdx) {
    if(this.timeLeft == 20)return;
    if(this.grid[rowIdx][colIdx] > 0) {
      this.grid[rowIdx][colIdx] = 0;
      this.gameService.addPoint();
      this.nextTarget();
    }
    
  }
  /*creates the new target*/
  nextTarget() {
    this.grid[this.rPos][this.rPos] = 1;
  }

  /*dunno*/
  get rPos() {
    let [min, max] = [0, 19];
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  timeLeft: number = 20;
  interval;


  /*starts the countdown*/ 
startTimer() {
  if(!this.interval){
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 20
        clearInterval(this.interval)
        alert("thaks for playing")
        
      }
    },1000)
  }
    
    
  }

  /*cleares the score*/
  clearscore(){
    this.gameService.$points.next(0)
    clearInterval(this.interval);
    this.timeLeft = 20
  }



  /*pauses the timer*/
  pauseTimer() {
    clearInterval(this.interval);
  }
}
