import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

export interface List {
  count:    number;
  next:     string;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {

  Response!:List;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void 
  {
    this.pokemonService.GetListPokemon().subscribe(data => {
      this.Response = data;
    });
  }

}
