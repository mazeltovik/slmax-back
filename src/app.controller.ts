import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts() {
    return this.appService.getProducts();
  }
  @Get(':id')
  getProduct(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    try {
      return this.appService.getProduct(id);
    } catch (err) {
      throw err;
    }
  }
  @Post(':id')
  buyProduct(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() data: { amount: number },
  ) {
    return this.appService.buyProduct(id, data.amount);
  }
}
