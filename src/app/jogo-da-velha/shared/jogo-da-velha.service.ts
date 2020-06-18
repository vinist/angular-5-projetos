import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numeroJogadas: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numeroJogadas = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  private inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++){
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  jogar(posX: number, posY: number): void {
    if (this.tabuleiro[posX][posY] !== this.VAZIO || this.vitoria) {
      return;
    }

    this.tabuleiro[posX][posY] = this._jogador;
    this.numeroJogadas++;
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X;

    if (!this.vitoria && this.numeroJogadas < 9){
      this.cpuJogar();
    }

    if (this.vitoria){
      this._showFinal = true;
    }

    if (!this.vitoria && this.numeroJogadas === 9){
      this._showFinal = true;
      this._jogador = this.VAZIO;
    }
  }

  fimJogo(linha: number, coluna: number, tabuleiro: any, jogador: number) {
    let fim: any = false;

    // linha
    if (tabuleiro[linha][0] === jogador &&
      tabuleiro[linha][1] === jogador &&
      tabuleiro[linha][2] === jogador){
      fim = [[linha, 0], [linha, 1], [linha, 2]];
    }

    // coluna
    if (tabuleiro[0][coluna] === jogador &&
      tabuleiro[1][coluna] === jogador &&
      tabuleiro[2][coluna] === jogador){
      fim = [[0, coluna], [1, coluna], [2, coluna]];
    }

    // diagonais
    if (tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador){
      fim = [[0, 0], [1, 1], [2, 2]];
    }

    if (tabuleiro[0][2] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][0] === jogador){
      fim = [[0, 2], [1, 1], [2, 0]];
    }

    return fim;
  }

  cpuJogar(): void {
    let jogada: number[] = this.obterJogada(this.O);

    if (jogada.length <= 0){
      jogada = this.obterJogada(this.X);
    }

    if (jogada.length <= 0) {
      let jogadas: any = [];
      for (let i = 0; i < this.TAM_TAB; i++) {
        for (let j = 0; j < this.TAM_TAB; j++) {
          if (this.tabuleiro[i][j] === this.VAZIO) {
            jogadas.push([i, j]);
          }

        }
      }

      let k = Math.floor((Math.random() * (jogadas.length - 1)));
      jogada = [jogadas[k][0], jogadas[k][1]];
    }

    this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
    this.numeroJogadas++;
    this.vitoria = this.fimJogo(jogada[0], jogada[1], this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X;
  }

  obterJogada(jogador: number): number[] {
    const tab = this.tabuleiro;

    for (let linha = 0; linha < this.TAM_TAB; linha++) {
      for (let coluna = 0; coluna < this.TAM_TAB; coluna++) {
        if (tab[linha][coluna] !== this.VAZIO) {
          continue;
        }
        tab[linha][coluna] = jogador;
        if (this.fimJogo(linha, coluna, tab, jogador)){
          return [linha, coluna];
        }
        tab[linha][coluna] = this.VAZIO;
      }
    }
    return [];
  }

  exibirX(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.X;
  }

  exibirO(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.O;
  }

  exibirVitoria(posX: number, posY: number): boolean {
    let exibirVitoria = false;

    if (!this.vitoria) {
      return exibirVitoria;
    }

    for (const pos of this.vitoria){
      if (pos[0] === posX && pos[1] === posY){
        exibirVitoria = true;
        break;
      }
    }
    return exibirVitoria;
  }

  novoJogo(){
    this.inicializar();
    this._showFinal = false;
    this._showTabuleiro = true;
    this._showInicio = false;
  }

  get showInicio(): boolean {
    return this._showInicio;
  }

  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  get showFinal(): boolean {
    return this._showFinal;
  }

  get jogador(): number {
    return this._jogador;
  }
}
