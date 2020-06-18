import { Component, OnInit } from '@angular/core';
import {TarefaModel, TarefaService} from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: TarefaModel[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  private listarTodos(): TarefaModel[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: TarefaModel): void {
    // desabilita o refresh do browser
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: TarefaModel): void {
    // desabilita o refresh do browser
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
