import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import env from './shared/config/env';
import { ormconfig } from './orm.config';
@Module({
  imports: [
    // MongooseModule.forRoot(env.mongoUrl),
    // TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
