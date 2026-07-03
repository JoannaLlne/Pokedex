import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})
export class Generations {
  public generations : Array<string>

  constructor() {
    this.generations = []

    this.generations.push("Génération I")
    this.generations.push("Génération II")
    this.generations.push("Génération III")
    this.generations.push("Génération IV")
    this.generations.push("Génération V")
    this.generations.push("Génération VI")
    this.generations.push("Génération VII")
  }
}
