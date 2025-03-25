import { Injectable } from '@nestjs/common';
import { MusicListStrategy } from './music-list.strategy';
import { MusicDto } from '../dto/music.dto';
import { MusicRepository } from 'src/repositories/music.repository';

@Injectable()
export class ContestationStrategy implements MusicListStrategy {
  constructor(private readonly repo: MusicRepository) {}

  async getList(): Promise<MusicDto[]> {
    const all = this.repo.findAll();
    return all
      .filter((m) => m.status === 'CONTESTADA' || m.status === 'EM_ANALISE')
      .map(MusicDto.fromEntity);
  }
}
