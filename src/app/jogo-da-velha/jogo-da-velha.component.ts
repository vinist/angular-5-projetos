import { Component, OnInit } from '@angular/core';
import {JogoDaVelhaService} from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private service: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.service.inicializar();
  }

  get showInicio(): boolean {
    return this.service.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.service.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.service.showFinal;
  }

  iniciarJogo(): void {
    this.service.iniciarJogo();
  }

  jogar(posX: number, posY: number){
    this.service.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.service.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.service.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.service.exibirVitoria(posX, posY);
  }

  get jogador(): number {
    return this.service.jogador;
  }

  novoJogo(): void {
    this.service.novoJogo();
  }

}
