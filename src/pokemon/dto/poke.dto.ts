import { PokemonDto } from "./interface/pokemon.dto";

export class PokeDto implements PokemonDto {
    constructor() {
    }
    count: number;
    next: string;
    previous: null;
    results: import("./interface/pokemon.dto").Result[];
}