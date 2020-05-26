import { Todo } from './../todo/model/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import * as fromFilter from './filter.actions';
@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: fromFilter.filtrosValidos): Todo[] {
    switch (filtro) {
      case 'pendientes':
        return (todos = todos.filter((td) => !td.completado));

      case 'completados':
        return (todos = todos.filter((td) => td.completado));

      default:
        return todos;
    }
  }
}
