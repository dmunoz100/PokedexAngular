import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilityDetailComponent } from './Pages/ability-detail/ability-detail.component';
import { PokemonDetailComponent } from './Pages/pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './Pages/pokemon/pokemon.component';
import { TypeDetailComponent } from './Pages/type-detail/type-detail.component';


const routes: Routes = [
  {path:"", redirectTo: '/Pokemon', pathMatch: 'full'  },
  { path: 'Pokemon', component: PokemonComponent },
  { path: 'PokemonDetail/:name', component: PokemonDetailComponent },
  { path: 'TypeDetail/:name', component: TypeDetailComponent },
  { path: 'AbilityDetail/:name', component: AbilityDetailComponent },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
