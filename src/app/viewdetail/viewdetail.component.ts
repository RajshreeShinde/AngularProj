import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../todos/todo';
import { TodoDetail } from '../todos/todoDetail';
import { TodoService } from '../todos/todo.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.css'],
    providers: [TodoService]
})
export class ViewdetailComponent implements OnInit {

  singleTodo: TodoDetail[];

  constructor(private route: ActivatedRoute,
	        private router: Router,
	        private todoService: TodoService,
		private location: Location,
        private _todoService: TodoService) { }

  todos: Todo[];
  active: Todo;

  ngOnInit() {

      this.route.params
          .switchMap((params: Params) => this._todoService.getUser(+params['id']))
          .subscribe(singleTodo => this.singleTodo = singleTodo);
  }

   createNew() {
        const newTodo = new Todo();
        this.todos.push(newTodo);
        this.active = newTodo;
    }

  goBack(): void {
      this.location.back();
  }

}
