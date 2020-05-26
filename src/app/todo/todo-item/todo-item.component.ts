import { EditarTodoAction, EliminarTodoAction, ToggleTodoAction } from './../todo.actions';
import { AppState } from './../../app.reducers';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtEditando') txtEditando: ElementRef;

  public editando: boolean;

  public checkFiel: FormControl;
  public txtInput: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkFiel = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkFiel.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtEditando.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    const action = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  EliminarTodo() {
    const action = new EliminarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
