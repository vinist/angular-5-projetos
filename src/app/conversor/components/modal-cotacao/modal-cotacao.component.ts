import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConversorService} from "../../service";
import {ConversaoModel, ConversaoResponseModel} from "../../models";

@Component({
  selector: 'app-modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponseModel;
  @Input() conversao: ConversaoModel = new ConversaoModel();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta() {
    this.confirm.emit();
  }

  get valorConvertido(): string {
    if (!this.conversaoResponse) {
      return '0';
    }
    return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }

  get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }
}
