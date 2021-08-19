import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/tarefa';
@Component({
  selector: 'app-add-tarefa',
  templateUrl: './add-tarefa.component.html',
  styleUrls: ['./add-tarefa.component.css']
})
export class AddTarefaComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert('Prencha a tarefa');
      return;
    }
    /*const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    
    this.onAddTask.emit(newTask);*/
  }

}
