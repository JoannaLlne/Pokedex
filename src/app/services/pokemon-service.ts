import {Inject, Injectable} from '@angular/core';
import {Pokemon} from "../components/models/pokemon";
import {HttpClient} from "@angular/common/http";
import {Generation} from "../components/models/generation";
import {mapOneOrManyArgs} from "rxjs/internal/util/mapOneOrManyArgs";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public BASE_URL: string = "https://pokeapi.co/api/v2/";

  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {

  }

  //Autre solution
  getAllGenerations(): Observable<any> {
    return this.http.get<{results : Array<Generation>}>(this.BASE_URL + 'generation').pipe(
      map(response => response.results)
    )
  }

  getAllPokemons(): Observable<any> {
    return this.http.get(this.BASE_URL + 'pokemon');
  }

  getPokemonDetail(url: string) {
    return this.http.get<Pokemon>(url);
  }
}
