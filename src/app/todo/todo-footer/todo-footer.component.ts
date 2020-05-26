import { Todo } from './../model/todo.model';
import { AppState } from './../../app.reducers';
import * as fromFilter from './../../filter/filter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EliminarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  public filtrosValidos: fromFilter.filtrosValidos[] = [
    'todos',
    'pendientes',
    'completados',
  ];
  public filtroActual: fromFilter.filtrosValidos;
  //public todos: Todo[];
  public conteo: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filter;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: fromFilter.filtrosValidos) {
    const action = new fromFilter.SetFiltroAction(filtro);
    this.store.dispatch(action);
  }

  contarPendientes(todos:Todo[]){
    this.conteo = todos.filter((td) => td.completado === false).length;
  }

  limpiarCompletados(){
    const action = new EliminarAllTodoAction();
    this.store.dispatch(action);
  }
}
