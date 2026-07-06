import { Injectable } from '@angular/core';
import { Pokemon } from '../app/components/models/pokemon';

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
public BASE_URL : string = 

    constructor() {
    }


    getAllGenerations() {
        let generations = []

    generations.push("Génération I")
    generations.push("Génération II")
    generations.push("Génération III")
    generations.push("Génération IV")
    generations.push("Génération V")
    generations.push("Génération VI")
    generations.push("Génération VII")

    return generations
    }

        getAllPokemons() {
            let pokemons : Array<Pokemon> = []

    pokemons.push({id: 1, name : "Bulbizarre", type: ["Plante, Poison"], height: 70, weight: 690})
    pokemons.push({id: 2, name : "Herbizarre", type: ["Plante, Poison"], height: 100, weight: 1300})
    pokemons.push({id: 3, name : "Florizarre", type: ["Plante, Poison"], height: 200, weight: 1600})
    pokemons.push({id: 4, name : "Salameche", type: ["Feu"], height: 60, weight: 850})
    pokemons.push({id: 5, name : "Reptincel", type: ["Feu"], height: 110, weight: 1900})
    pokemons.push({id: 6, name : "Dracaufeu", type: ["Feu, Vol"], height: 170, weight: 9050})

    return pokemons
        }
    }


