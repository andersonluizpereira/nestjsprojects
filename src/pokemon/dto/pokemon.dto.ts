import { PokemonInterfaceDto } from "./interface/pokemon.interface.dto";

export class PokemonDto implements PokemonInterfaceDto {
    constructor(
       public count: number,
       public next: string,
       public previous: null,
       public results: import("./interface/pokemon.interface.dto").Result[]
    ) {
    }
}
