import { useState } from "react";

type Props = {
    addTodo: AddTodo;
};

function AddTodo({ addTodo }: Props) {
    const [text, setText] = useState("");

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        addTodo(text);
                        setText("");
                    }}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
