import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-fastgamemode',
  templateUrl: './fastgamemode.component.html',
  styleUrls: ['./fastgamemode.component.scss']
})
export class FastgamemodeComponent implements OnInit {


  timer = interval(10);
  interval: any;
  timeLeft: number = 20;
  starttimer = this.timer.pipe(take(2))



  constructor() { }

  nothing:number=0
  x = 0
  y = 0
  currentPoints = 0
  MAXPOINTS = 5
  time = 2000;
  score = 0;

  /*grid where the dots will be in*/ 
  grid=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]
  /*random num for the pos of dots*/ 
  randomPos(){
    return Math.floor(Math.random() * (9 - 0)) + 0;
  }

  /*Game loop where the dots starts appearing */
  gameLoop(){
    this.grid=[
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
    ]
    if(this.currentPoints < 5){
      this.currentPoints += 1
    
    }
    for(let i = 0; i <= this.currentPoints; i++){
      this.addDot(this.randomPos(),this.randomPos())
    }
  }

  /*iterate the loop until the time is over */
  iterate(){
    this.gameLoop()
    this.interval = setInterval(() => {
      if(this.timeLeft > 0){
        this.timeLeft--;
      }else{
        this.timeLeft = 20;
        clearInterval(this.interval)
      }
      this.gameLoop()
    },this.time)
  }

  /*creates the dots*/
  addDot(x:number,y:number){
    this.grid[x][y] = 1
  }


  restartGame(){
    clearInterval(this.interval);
    this.timeLeft= 20;
    this.score= 0;
  }

  /*the dots on click disappear*/
  removeDot(x:number,y:number){
    if(this.timeLeft==20)return;
    if(this.grid[x][y] < 1)return;
    this.grid[x][y] = 0
    this.score += 1
  }

  /*sets the rate of appearing of the dots*/ 
  level1(){
    this.time= 2000;
    clearInterval(this.interval);
    this.timeLeft= 30;
    this.score= 0;
    this.iterate();
  }
  level2(){
    this.time= 1500;
    clearInterval(this.interval);
    this.timeLeft= 20;
    this.score= 0;
    this.iterate();
  }
  level3(){
    this.time= 800;
    clearInterval(this.interval);
    this.timeLeft= 20;
    this.score= 0;
    this.iterate();
  }
  
  ngOnInit(): void {
    

  }

}
