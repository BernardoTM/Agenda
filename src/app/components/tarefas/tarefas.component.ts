import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Task } from 'src/app/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tasks: Task[] = [];
   
  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
  }

  addTask(task: Task){
    
  }

}
