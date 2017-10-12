/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoEditorComponent } from '../todo-editor/todo-editor.component';
import { Todo } from '../todo';
import { TodoService} from '../todo.service';
import { TODOS } from '../mock-todos';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoEditorComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // an async test
  // see: https://angular.io/docs/ts/latest/guide/testing.html#!#async
  it('should display todos in a list view once present', async(() => {
    // waits for async calls to complete (those fired in onInit())
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const listGroupItems = fixture.debugElement
        .queryAll(By.css('.list-group-item:not(#my-new-todo)'));
      
      expect(listGroupItems.length).toEqual(TODOS.length);
    });
  }));

  // a fakeAsync test
  // see: https://angular.io/docs/ts/latest/guide/testing.html#!#fakeAsync
  it('should show todo editor when a todo is clicked', fakeAsync(() => {
    tick(); // simulate the passage of time so all async calls complete
    fixture.detectChanges();

    const listGroupItems = fixture.debugElement
      .queryAll(By.css('.list-group-item'));
    
    const firstTodo = listGroupItems[0];
    firstTodo.triggerEventHandler('click', null);
    
    tick();
    fixture.detectChanges();

    const editor = fixture.debugElement
      .query(By.css('#my-todo-editor'));
    
    expect(editor).toBeDefined();
  }));

});
