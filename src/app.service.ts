import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    return 'es una pruebita';
  }
  getDaysUntilMyBirthday(birthday): number{
    const moment = require('moment-timezone');
    let parsebirthday= birthday.split('/')
    let milibirthday=new Date(parsebirthday[2],parsebirthday[1]-1,parsebirthday[0]).getTime()
    console.log(milibirthday);
    //let today = new Date()
    let timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;
    let today=moment.tz(timezone).format();
    let todaylocal=new Date(today).getTime();
    console.log(today)
    //let result= parsebirthday-today;
    let result=Math.round((milibirthday-todaylocal)/(1000*60*60*24));
    return result;
  }
  getTheNumber(first,second): string{
    let strresult='';
    for (let x=1;x<=second;x++){
     let resultado=first*x;
     strresult=strresult+resultado.toString();
    }
    return strresult.substring(0,9);
  }
}
