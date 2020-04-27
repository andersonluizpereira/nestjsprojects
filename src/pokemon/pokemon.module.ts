import { Module, HttpModule, CacheModule } from '@nestjs/common';
import { PokemonService } from './service/pokemon.service';
import { PokemonController } from './controllers/pokemon.controller';

@Module({
    imports: [
        HttpModule,
        CacheModule.register(),],
    controllers: [PokemonController],
    providers: [PokemonService]
})
export class PokemonModule {}
