import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './routes/client/client.module';
import typeOrmConfig from '../config/databaseconfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
