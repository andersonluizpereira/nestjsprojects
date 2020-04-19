import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from './orm.config';
import { PokemonModule } from './pokemon/pokemon.module';
import env from './shared/config/env';
@Module({
  imports: [
    // MongooseModule.forRoot(env.mongoUrl),
    // TypeOrmModule.forRoot(ormconfig),
  PokemonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
