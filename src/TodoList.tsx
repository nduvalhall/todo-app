import TodoItem from "./TodoItem";

type Props = {
    todos: Todo[];
    toggleTodo: ToggleTodo;
};

function TodoList({ todos, toggleTodo }: Props) {
    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <TodoItem todo={todo} toggleTodo={toggleTodo} key={index} />
                );
            })}
        </ul>
    );
}

export default TodoList;
