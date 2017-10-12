import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';

import { Todo } from './todo';
import { TodoDetail } from '../todos/todoDetail';
//import { TODOS } from './mock-todos';

@Injectable()
export class TodoService {

    constructor(
        private http: Http
        ) { }

    getUser(userId: number) : Observable<TodoDetail[]> {
        return this.http.get("https://jsonplaceholder.typicode.com/todos?userId${userId}")
            .map((response: Response) => response.json())
            .catch(( error:any) => Observable.throw(error.json().error || 'server error'));


      /*  let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let myParams = new URLSearchParams();
        myParams.append('id', userId);
        let options = new RequestOptions({ headers: myHeaders, params: myParams });

        return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=')
            .map((response: Response) => response.json())
            .catch(( error:any) => Observable.throw(error.json().error || 'server error'));  */

    }

    getAll(): Observable<Todo[]> {
         return this.http.get("https://jsonplaceholder.typicode.com/users")
           .map((response: Response) => response.json())
           .catch(( error:any) => Observable.throw(error.json().error || 'server error'));

    }




}