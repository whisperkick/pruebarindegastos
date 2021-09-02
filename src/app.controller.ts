import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { first } from 'rxjs';
import { AppService } from './app.service';
import { valoresconversion } from './jsonformats/conversion.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //Ruta pregunta 1
  @Get('getConvertedAmount')
  getConvertedAmount(@Query('from') from: string, @Query('to') to: string, @Query('amount') amount:number){
    return this.appService.getConvertedAmount(from,to,amount);
  }
  //Ruta pregunta 2
  @Get('getDaysUntilMyBirthday')
  getDaysUntilMyBirthday(@Query('birthday') birthday){
    return this.appService.getDaysUntilMyBirthday(birthday);
  }
  //Ruta pregunta 3
  @Get('getTheNumber')
  getTheNumber(@Query('first') first, @Query ('second') second){
    return this.appService.getTheNumber(first,second);
  }
}
