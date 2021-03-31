import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reactiontest',
  templateUrl: './reactiontest.component.html',
  styleUrls: ['./reactiontest.component.scss']
})
export class ReactiontestComponent implements OnInit {
  


  interval: any;
  interval2: any;
  timeLeft: number = 6;
  timeLeft2: number = 6;
  intervalclicked:any=0
  timeLeftclicked:number = 0
  mseconds = 0


  constructor(private userService: UserService ) { }

  /*Creates a random num*/
  randomNum(){
    return Math.floor(Math.random() * (6 - 3)) + 3;

  }

  randomnum = this.randomNum()
  numbers:any;


  /*Starts the millisecond counter*/
  timerstart(){
    this.interval2= setInterval(() => {
      if(this.timeLeft2 > 0){
        this.timeLeft2++;
      }
    },1)
  }

  /*Track the second click and if the player clicks too early */ 
  secondclick(){
    if(this.randomnum != this.timeLeft ){
    }else{
      this.mseconds = this.timeLeft2
    }
    this.timeLeft = 6
    this.timeLeft2= 6
    clearInterval(this.interval2)
    clearInterval(this.interval)
    this.interval = null
    this.interval2 = null
  }

  /*Starts the countdown and check if random num and timeleft matches to start the game*/ 
  check(){
    if(!!this.interval) {this.secondclick()}else{;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0 ){
        this.timeLeft--;
      }
      if(this.timeLeft == this.randomnum){
        this.timerstart();
      }
    },1000)  
  }
  }

  get userdata(){
    return this.userService.user
  }
  
  

  ngOnInit(): void {

  }

}
