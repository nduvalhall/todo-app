type Todo = {
    text: strin;
    complete: boolean;
};

type ToggleTodo = (todo: Todo) => void;

type AddTodo = (text: string) => void;
