import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbilityService } from 'src/app/Services/ability.service';

export interface Ability {
  effect_changes:      any[];
  effect_entries:      EffectEntry[];
  flavor_text_entries: FlavorTextEntry[];
  generation:          Generation;
  id:                  number;
  is_main_series:      boolean;
  name:                string;
  names:               Name[];
  pokemon:             Pokemon[];
}

export interface EffectEntry {
  effect:       string;
  language:     Generation;
  short_effect: string;
}

export interface Generation {
  name: string;
  url:  string;
}

export interface FlavorTextEntry {
  flavor_text:   string;
  language:      Generation;
  version_group: Generation;
}

export interface Name {
  language: Generation;
  name:     string;
}

export interface Pokemon {
  is_hidden: boolean;
  pokemon:   Generation;
  slot:      number;
}

@Component({
  selector: 'app-ability-detail',
  templateUrl: './ability-detail.component.html'
})
export class AbilityDetailComponent implements OnInit {

  PokemonAbility!:Ability

  constructor(private abilityservice:AbilityService,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.abilityservice.GetItem(this.ar.snapshot.paramMap.get("name")!).subscribe(data => {
      this.PokemonAbility = data;
    });
  }

}
