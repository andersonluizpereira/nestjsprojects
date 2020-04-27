import { HttpService, Injectable } from "@nestjs/common";

@Injectable()
export class PokemonService {
    /**
     *
     */
    constructor(private readonly service: HttpService) {

    }

    baseApiPokemon() {
        return this.service.get('https://pokeapi.co/api/v2/pokemon')
    }
}