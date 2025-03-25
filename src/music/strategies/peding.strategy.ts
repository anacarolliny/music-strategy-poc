import { MusicRepository } from 'src/music/repositories/music.repository';
import { MusicListStrategy } from './music-list.strategy';
import { MusicDto } from 'src/music/dto/music.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PendingStrategy implements MusicListStrategy {
  constructor(private readonly repo: MusicRepository) {}

  async getList(): Promise<MusicDto[]> {
    const all = this.repo.findAll();
    return all
      .filter((m) => m.status === 'PENDENTE' || m.status === 'SEM_CONTRATO')
      .map(MusicDto.fromEntity);
  }
}
