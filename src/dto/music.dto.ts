import { MusicEntity } from 'src/entities/music.entity';

export class MusicDto {
  id: string;
  title: string;
  status: string;

  static fromEntity(entity: MusicEntity): MusicDto {
    return {
      id: entity.id,
      title: entity.title,
      status: entity.status,
    };
  }
}
