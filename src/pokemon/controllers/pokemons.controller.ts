import { PokemonService } from "../service/pokemon.service";
import { get } from "http";
import { Controller, Get } from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { PokeDto } from "../dto/poke.dto";

@Controller('v2/pokemons')
@ApiUseTags('pokemon-resource')
export class PokemonController {
  /**
   *
   */
  constructor(private readonly service: PokemonService) {

  }
  
  @Get('/pokemon')
    @ApiResponse({
        status: 200,
        description: 'Buscas dos Pokemons.',
        type: PokeDto
      })
  async getBaseApiPokemon() {
     const res = await (await this.service.baseApiPokemon().toPromise());
     return res.data;
 }
}