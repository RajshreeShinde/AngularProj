/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoEditorComponent } from './todo-editor.component';
import { Todo } from '../todo';

describe('TodoEditorComponent', () => {
  let component: TodoEditorComponent;
  let fixture: ComponentFixture<TodoEditorComponent>;
  let testTodo: Todo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoEditorComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEditorComponent);
    component = fixture.componentInstance;

    testTodo = new Todo();
    testTodo.task = 'Foobar';
    testTodo.flagged = true;

    component.todo = testTodo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
