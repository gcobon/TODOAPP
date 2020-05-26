import { ToggleAllAction } from './todo.actions';
import { AppState } from './../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  public completado = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  checkAll() {
    this.completado = !this.completado;

    const action = new ToggleAllAction(this.completado);
    this.store.dispatch(action);
  }
}
