import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './Pages/pokemon/pokemon.component';
import { PokemonDetailComponent } from './Pages/pokemon-detail/pokemon-detail.component';
import { TypeDetailComponent } from './Pages/type-detail/type-detail.component';
import { AbilityDetailComponent } from './Pages/ability-detail/ability-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetailComponent,
    TypeDetailComponent,
    AbilityDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
