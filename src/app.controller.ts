import {Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: any) {
    return this.appService.create(createItemDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateItemDto: any) {
    return this.appService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.appService.remove(id);
  }
}
