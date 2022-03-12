import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeService } from 'src/app/Services/type.service';

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


@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html'
})
export class TypeDetailComponent implements OnInit {

  PokemonType!:Type
  constructor(private typeservice:TypeService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.typeservice.GetTypeItem(this.ar.snapshot.paramMap.get("name")!).subscribe(data=>{
        this.PokemonType = data;
    });
  }

}
