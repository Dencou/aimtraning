import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  gotoAimTranig(){
    this._router.navigate(['./mainaim'])

  }
  goToFastAim(){
    this._router.navigate(['./fastaim'])
  }
  goToLogin(){

  }
  goToSignUp(){

  }
  goToReactionTest(){
    this._router.navigate(['./reactiontest'])
  }
  
  goToPokemon(){
    this._router.navigate(['./pokemon'])
  }

}

