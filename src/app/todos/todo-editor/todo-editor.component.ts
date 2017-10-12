import { Component, Input } from '@angular/core';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent {

  @Input()
  todo: Todo;

  constructor() { }

}