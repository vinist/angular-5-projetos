import { DataBrPipe } from './data-br.pipe';
import {TestBed} from '@angular/core/testing';
import {ConversorService} from '../service';
import {HttpClientModule} from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

describe('DataBrPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConversorService,
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ],
      imports: [
        HttpClientModule,
      ],
    });
  });


  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-06-04 para 04/06/2020', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2020-06-04')).toEqual('04/06/2020');
  });
});
