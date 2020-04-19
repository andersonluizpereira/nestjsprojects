import { Injectable, HttpService } from "@nestjs/common";

@Injectable()
export class PokemonService { 
    constructor(private readonly httpService: HttpService
    
    ) {

    }
    getBaseApiPokemon() {
        const url = `https://pokeapi.co/api/v2/pokemon`;
        return this.httpService.get(url);
    }
}