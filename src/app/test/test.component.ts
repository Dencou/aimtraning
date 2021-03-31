import { Component, OnInit } from '@angular/core';
import { IPokemon, PokemonService } from '../pokemon.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private pokeService: PokemonService) { }

  id = 1;
  stringid:string
  current: IPokemon;

  submit(){
    this.pokeService.getPokemon(this.id).subscribe(
      data => {
      this.current = data;
      this.stringid = this.current.name
    },
    error => {
      console.log(error)
      window.alert(error.status==404 ? 'Pokemon not found' : 'Error')
      
    })
  }
  stringSearch(){
    if(Number(this.stringid) ){
      alert("Cannot use number here please use the id input below")
      return
    }
    this.pokeService.getPokemon(this.stringid).subscribe(
      data =>{
        this.current= data
        this.id = this.current.id
      },
      error =>{
        window.alert(error.status==404 ? 'Pokemon not found' : 'Error')
      }
    )
  }
 
  next() {
    this.id += 1;
    this.submit()
  }

  getRandomFor(moves){
    return moves.map(m => m.move).map((move) => move.name)
  }

  getAbilities(abilities){
    let result = abilities.map(a => a.ability.name);

    return result;

  }

  prev() {
    if(this.id == 1)return;
    this.id -= 1;
    this.submit()
  }
  
  ngOnInit(): void {
    this.submit()
    
  }

}
