import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../tarefa';
import { TASKS } from '../tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
