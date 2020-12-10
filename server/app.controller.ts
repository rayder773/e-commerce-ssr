import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/speakers')
  findAllSpeakers(): any[] {
    return [
      228
    ];
  }
}
