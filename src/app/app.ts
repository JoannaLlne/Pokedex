import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons';
import { GenerationsComponent } from './components/generations/generations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsComponent, PokemonsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'PokemonManager';
}
