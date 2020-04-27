import { Module, HttpModule } from '@nestjs/common';
import { PokemonService } from './service/pokemon.service';
import { PokemonController } from './controllers/pokemons.controller';

@Module({
    imports: [HttpModule],
    controllers: [PokemonController],
    providers: [PokemonService]
})
export class PokemonModule {}
