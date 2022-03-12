import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Type {
  damage_relations:      DamageRelations;
  game_indices:          GameIndex[];
  generation:            Generation;
  id:                    number;
  move_damage_class:     Generation;
  moves:                 Generation[];
  name:                  string;
  names:                 Name[];
  past_damage_relations: any[];
  pokemon:               Pokemon[];
}

export interface DamageRelations {
  double_damage_from: Generation[];
  double_damage_to:   any[];
  half_damage_from:   any[];
  half_damage_to:     Generation[];
  no_damage_from:     Generation[];
  no_damage_to:       Generation[];
}

export interface Generation {
  name: string;
  url:  string;
}

export interface GameIndex {
  game_index: number;
  generation: Generation;
}

export interface Name {
  language: Generation;
  name:     string;
}

export interface Pokemon {
  pokemon: Generation;
  slot:    number;
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http:HttpClient) { }

  GetTypeItem=(name:string):Observable<Type>=>{
    return this.http.get<Type>(`https://pokeapi.co/api/v2/type/${name}`);
  }
}
