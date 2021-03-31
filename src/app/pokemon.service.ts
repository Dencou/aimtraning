import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface IPokemonAbility {
  isHidden: boolean;
  slot: number;
  ability: {name: string, url: string}
}

export interface IPokemonMove {
  move: {
    name: string,
    url: string
  },
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  abilities: IPokemonAbility[],
  moves: IPokemonMove[],
  sprites: {front_default: string, back_default: string}
}


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urls = {
    pokemon: `https://pokeapi.co/api/v2/pokemon/`,
    
  }
  
  constructor(private http: HttpClient) { }
  
  getPokemon(indetifier: string | number) {
    return this.http.get<IPokemon>(this.urls.pokemon + indetifier)
  }


}
