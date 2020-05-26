import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromActions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo(){
    if(this.txtInput.invalid){
      return;
    }

    const action = new fromActions.AgregarTodoAction(this.txtInput.value);

    this.store.dispatch(action);

    this.txtInput.setValue('');
  }
}
