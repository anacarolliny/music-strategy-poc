import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusicController } from './music/controllers/music.controller';
import { MusicRepository } from './music/repositories/music.repository';
import { MusicListService } from './music/services/music.service';
import { ContestationStrategy } from './music/strategies/contestation.strategy';
import { PendingStrategy } from './music/strategies/peding.strategy';
import { ReleasedStrategy } from './music/strategies/release.strategy';

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
