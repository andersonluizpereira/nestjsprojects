import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { PokemonService } from "../service/pokemon.service";
import { Result } from "src/shared/models/result.model";
import { ApiResponse, ApiUseTags } from "@nestjs/swagger";
import  { PokeDto } from "../dto/poke.dto"

@Controller('v2/pokemons')
@ApiUseTags('pokemon-resource')
export class PokemonsController { 
    constructor(private readonly service: PokemonService) {
 
    }
    @Get('/pokemon')
    @ApiResponse({
        status: 200,
        description: 'Buscas dos Pokemons.',
        type: PokeDto
      })
    async baseap() {
        try {
            const response = await this.service.getBaseApiPokemon().toPromise();
            return new Result(null, true, response.data, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível conectar na sua api de Pokemon', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }
}