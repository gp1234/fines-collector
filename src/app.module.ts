import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinesController } from './fines/fines.controller';

@Module({
  controllers: [AppController, FinesController],
  providers: [AppService],
})
export class AppModule {}
