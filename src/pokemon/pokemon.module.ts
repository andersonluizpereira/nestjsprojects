
import { Module, CacheModule, HttpModule } from '@nestjs/common';
import { PokemonService } from './service/pokemon.service';
import { PokemonsController } from './controllers/pokemon.controller';

@Module({
    imports: [
        HttpModule,
        CacheModule.register(),],
    controllers: [PokemonsController],
    providers: [PokemonService]
})
export class PokemonModule {}
