import { IPokemonDto } from "./pokemon.dto";

export class PokeDto implements IPokemonDto {
    constructor() {
    }
    count: number;
    next: string;
    previous: null;
    results: import("./pokemon.dto").Result[];
}