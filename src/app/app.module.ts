import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEditorComponent } from './todos/todo-editor/todo-editor.component';
import { AppRoutingModule } from './app.routing.module';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';

import { TodoService } from './todos/todo.service';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoEditorComponent,
        ViewdetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
