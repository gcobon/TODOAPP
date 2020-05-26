import { Todo } from './../todo/model/todo.model';
import * as fromFilter from './filter.actions';

const estadoInicial: fromFilter.filtrosValidos = 'todos';

export function filterReducer(
  state = estadoInicial,
  action: fromFilter.actions
): fromFilter.filtrosValidos {
  switch (action.type) {
    case fromFilter.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
}
