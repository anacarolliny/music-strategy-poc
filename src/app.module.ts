import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicController } from './controllers/music.controller';
import { MusicRepository } from './repositories/music.repository';
import { MusicListService } from './services/music.service';
import { ContestationStrategy } from './strategies/contestation.strategy';
import { PendingStrategy } from './strategies/peding.strategy';
import { ReleasedStrategy } from './strategies/release.strategy';

@Module({
  imports: [],
  controllers: [AppController, MusicController],
  providers: [
    AppService,
    MusicRepository,
    MusicListService,
    ContestationStrategy,
    PendingStrategy,
    ReleasedStrategy,
  ],
})
export class AppModule {}
