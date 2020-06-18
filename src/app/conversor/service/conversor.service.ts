import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConversaoModel, ConversaoResponseModel} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = 'http://data.fixer.io/api/latest?access_key=5082b4b2d560cdf3e16877c9bd4e6914';

  constructor(private httpClient: HttpClient) { }

  converter(conversao: ConversaoModel): Observable<any> {
    const params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.httpClient.get(this.BASE_URL + params);
  }

  cotacaoPara(conversaoResponse: ConversaoResponseModel, conversao: ConversaoModel): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.rates[conversao.moedaPara];
  }

  cotacaoDe(conversaoResponse: ConversaoResponseModel, conversao: ConversaoModel): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    // toFixed(4) - apenas 4 casas decimais
    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponseModel): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}
