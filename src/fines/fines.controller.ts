import { Controller, Get, Ip } from '@nestjs/common';

@Controller('fines')
export class FinesController {
  @Get()
  findAll(@Ip() ip: string): string {
    return `These are all the fines you have to pay ${ip}! `;
  }
}
