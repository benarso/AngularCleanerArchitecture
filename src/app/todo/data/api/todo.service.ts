import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';

export abstract class TodoService {
    abstract loadTodos(): Observable<Todo[]>;
    abstract addTodo(todo: Todo): Observable<Todo>;
    abstract removeTodo(todo: Todo);
    abstract updateTodo(id, changes: Todo);
}
