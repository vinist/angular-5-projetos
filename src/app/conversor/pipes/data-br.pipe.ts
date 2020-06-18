import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(data: any): string {
    if (!data){
      return '';
    }
    // data = new Date(data);
    const datePipe = new DatePipe('pt-BR');
    return datePipe.transform(data, 'dd/MM/yyyy');;
  }

}
