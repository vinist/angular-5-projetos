import {Component, OnInit, ViewChild} from '@angular/core';
import {ConversaoModel, ConversaoResponseModel, MoedaModel} from '../../models';
import {ConversorService, MoedaService} from '../../service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: MoedaModel[];
  conversao: ConversaoModel;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponseModel;

  @ViewChild('conversaoForm', {static: true}) conversaoForm: NgForm;

  constructor(private moedaService: MoedaService,
              private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new ConversaoModel('USD', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid){
      this.conversorService.converter(this.conversao)
        .subscribe(resp => this.conversaoResponse = resp,
                   err => this.possuiErro = true);
    }
  }

}
