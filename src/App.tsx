import { useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo: AddTodo = (text: string) => {
        const newTodo: Todo = { text: text, complete: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo: ToggleTodo = (todo: Todo) => {
        const newTodos = todos.map((currentTodo) => {
            if (todo === currentTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }

            return currentTodo;
        });
        setTodos(newTodos);
    };

    return (
        <div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodo addTodo={addTodo} />
        </div>
    );
}

export default App;
