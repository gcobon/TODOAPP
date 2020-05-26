import { Todo } from './model/todo.model';
import * as fromTodo from './todo.actions';

const todo1 = new Todo('Salvar el mundo');
const todo2 = new Todo('Hacer ejercicio');

const estadoInicial: Todo[] = [todo1, todo2];

export function todoReducer(
  state = estadoInicial,
  action: fromTodo.Acciones
): Todo[] {
  switch (action.type) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado,
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map((todoEdit) => {
        return {
          ...todoEdit,
          completado: action.completado,
        };
      });

    case fromTodo.EDITAR_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.text,
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.ELIMINAR_TODO:
      return state.filter((todoDelete) => todoDelete.id != action.id);

    case fromTodo.ELIMINAR_ALL_TODO:
      return state = state.filter(todoDelete=>!todoDelete.completado);

    default:
      return state;
  }
}
