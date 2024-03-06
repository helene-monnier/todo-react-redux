// --- Interface pour le format de task
export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

// --- Type pour le reducer des tasks
export type TodoState = {
  todoList: TodoItem[];
};
