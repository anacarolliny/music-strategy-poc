import { Controller, Get, Param } from '@nestjs/common';
import { MusicListService } from 'src/music/services/music.service';

@Controller('music/list')
export class MusicController {
  constructor(private readonly service: MusicListService) {}

  @Get(':type')
  getList(@Param('type') type: string) {
    return this.service.getList(type);
  }
}
