import { Injectable } from '@nestjs/common';
import { ContestationStrategy } from 'src/strategies/contestation.strategy';
import { MusicListStrategy } from 'src/strategies/music-list.strategy';
import { PendingStrategy } from 'src/strategies/peding.strategy';
import { ReleasedStrategy } from 'src/strategies/release.strategy';

@Injectable()
export class MusicListService {
  private readonly strategies: Record<string, MusicListStrategy>;

  constructor(
    contestation: ContestationStrategy,
    released: ReleasedStrategy,
    pending: PendingStrategy,
  ) {
    this.strategies = {
      contestation,
      released,
      pending,
    };
  }

  async getList(type: string) {
    const strategy = this.strategies[type];
    if (!strategy) throw new Error(`Tipo de lista inválido: ${type}`);
    return strategy.getList();
  }
}
