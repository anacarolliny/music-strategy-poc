import { MusicDto } from 'src/dto/music.dto';

export interface MusicListStrategy {
  getList(): Promise<MusicDto[]>;
}
