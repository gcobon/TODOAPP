import { Todo } from './../model/todo.model';
import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFilter from '../../filter/filter.actions'

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  public todos:Todo[] = [];
  public filtro: fromFilter.filtrosValidos;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
       this.todos = state.todos;
       this.filtro = state.filter;
      });
  }

}
