import { Injectable } from '@angular/core';
import {TarefaModel} from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): TarefaModel[] {
    const tarefas = localStorage.tarefas;
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: TarefaModel): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage.tarefas = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): TarefaModel {
    const tarefas: TarefaModel[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: TarefaModel): void {
    const tarefas: TarefaModel[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id){
        objs[index] = tarefa;
        return;
      }
    });
    localStorage.tarefas = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: TarefaModel[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage.tarefas = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: TarefaModel[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage.tarefas = JSON.stringify(tarefas);
  }
}
