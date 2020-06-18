import { Component, OnInit } from '@angular/core';
import {CalculadoraService} from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(numero: string): void {
    if (this.operacao){
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }else {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }
  }

  private concatenarNumero(numeroAtual: string, numeroConcat: string): string {
    if (numeroAtual === '0' || numeroAtual === null){
      numeroAtual = '';
    }
    if (numeroConcat === '.' && numeroAtual === ''){
      return '0.';
    }
    if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1){
      return numeroAtual;
    }
    return numeroAtual + numeroConcat;
  }

  definirOperacao(operacao: string): void {
    if (!this.operacao){
      this.operacao = operacao;
      return;
    }

    if (this.numero2){
      this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if (!this.numero2) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
  }

  get display(): string {
    if (this.resultado) {
      return this.resultado.toString();
    }
    if (this.numero2){
      return this.numero2;
    }
    return this.numero1;
  }
}
