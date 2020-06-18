import {Component, OnInit, ViewChild} from '@angular/core';
import {TarefaModel, TarefaService} from '../shared';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', {static: true}) formTarefa: NgForm;
  tarefa: TarefaModel;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new TarefaModel();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
