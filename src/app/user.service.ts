import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:any
  pokemonsdescription:any

  constructor(private http: HttpClient) { }

  getUser(apilink,description){
    
    this.http.get(apilink).subscribe(
      data => {
        this.user = data;

      },
      error => {}

    )
    this.http.get(description).subscribe(
      datos => {
        this.pokemonsdescription = datos
        console.log("descriptions",this.pokemonsdescription.descriptions)
      }
    )
  }

  }
  




