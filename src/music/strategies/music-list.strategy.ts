import { MusicDto } from 'src/music/dto/music.dto';

export interface MusicListStrategy {
  getList(): Promise<MusicDto[]>;
}
