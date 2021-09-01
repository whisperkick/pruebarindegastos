import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { first } from 'rxjs';
import { AppService } from './app.service';
import { valoresconversion } from './jsonformats/conversion.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTest(): string{
    return this.appService.getTest();
  }
  @Post('conversion')
  convertirvalor(@Body() valor: valoresconversion){
    console.log(valor);
    return valor;
}
  @Get('getConvertedAmount')
  getConvertedAmount(@Param('from') from: string, @Param('to') to: string, @Param('amount') amount:number){
    return from;
  }
  @Get('getDaysUntilMyBirthday')
  getDaysUntilMyBirthday(@Query('birthday') birthday){
    return this.appService.getDaysUntilMyBirthday(birthday);
  }
  @Get('getTheNumber')
  getTheNumber(@Query('first') first, @Query ('second') second){
    return this.appService.getTheNumber(first,second);
  }
}
