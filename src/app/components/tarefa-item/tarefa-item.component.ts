import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tarefa-item',
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.css']
})
export class TarefaItemComponent implements OnInit {
  
  @Input() task: any;//era para ser do tipo Task mas dava erro.
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
 

  constructor() { }

  ngOnInit(): void {}

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
