import { Component, OnInit } from '@angular/core';


import { Todo } from '../todo';
import { TodoDetail } from '../todoDetail';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  singleTodo: TodoDetail[];

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this._todoService.getAll()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

   /* getUser(userId:number) {
        this._todoService.getUser(userId)
            .subscribe(todos => {
                this.singleTodo = todos;
            });



    }    */

}
