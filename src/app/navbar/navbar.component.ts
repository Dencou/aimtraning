import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goToMainPage(){
    this._router.navigate(['./mainpage']);
 
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


}
