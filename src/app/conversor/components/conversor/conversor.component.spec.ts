import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import {ConversorService, MoedaService} from '../../service';
import {NumeroDirective} from '../../directives';
import {DataBrPipe} from '../../pipes';
import {ModalCotacaoComponent} from '../modal-cotacao';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('ConversosComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent,
      ],
      providers: [
        MoedaService,
        ConversorService,
      ],
      imports: [
        FormsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
