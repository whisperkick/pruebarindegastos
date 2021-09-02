import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //Servicio de pregunta 2
  getDaysUntilMyBirthday(birthday){
    const moment = require('moment-timezone');
    let parsebirthday= birthday.split('/');
    let milibirthday=new Date(parsebirthday[2],parsebirthday[1]-1,parsebirthday[0]).getTime();
    if (milibirthday){
    let timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;
    let today=moment.tz(timezone).format();
    let militoday=new Date(today).getTime();
    if (milibirthday>=militoday){
    let result=Math.round((milibirthday-militoday)/(1000*60*60*24));
    return result;
    }
    else{
      return "la fecha de cumpleaños debe ser mayor a la fecha actual"
    }
  }
  else{
    return "la fecha debe tener el formato DD/MM/AAAA"
  }
 
  }
  //Servicio de pregunta 3
  getTheNumber(first,second): string{
    if (parseInt(first) && parseInt(second)){
    let strresultado='';
    for (let x=1;x<=second;x++){
     let resultado=first*x;
     strresultado=strresultado+resultado.toString();
    }
    return strresultado.substring(0,9);
  }
  else{
    return "Los numeros contienen errores"
  }
  }
  //Servicio de pregunta 1
  getConvertedAmount(from, to, amount){
    if (from == 'USD'){
      const axios = require('axios').default;
      async function getExchangeRate() {
      try{
       const response= await axios.get('https://openexchangerates.org/api/latest.json?app_id=5f47a75cb754451ba9bb8a060a249691')
        console.log(response.data['rates'][to]);
        let rate=parseFloat(response.data['rates'][to]);
        if (rate){
        let result=amount*rate;
        let endresponse=result.toString()+" "+ to;
        return endresponse;
        }
        else{
          return 'moneda destino no valida';
        }
      }
      catch(err){
        console.log(err)
        return err
      }
      
    }
    return getExchangeRate()
  }
    else{
      return 'Error, la moneda base debe ser USD';
    }
  }
}
