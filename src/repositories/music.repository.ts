import { Injectable } from '@nestjs/common';
import { MusicEntity } from 'src/entities/music.entity';

@Injectable()
export class MusicRepository {
  private musics: MusicEntity[] = [
    new MusicEntity('1', 'Música A', 'CONTESTADA'),
    new MusicEntity('2', 'Música B', 'LIBERADA'),
    new MusicEntity('3', 'Música C', 'PENDENTE'),
    new MusicEntity('4', 'Música D', 'SEM_CONTRATO'),
    new MusicEntity('5', 'Música E', 'EM_ANALISE'),
  ];

  findAll(): MusicEntity[] {
    return this.musics;
  }
}
