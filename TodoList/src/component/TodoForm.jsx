import React from "react";
import useTodo from "../context/TodoContext";
function TodoForm() {
    const {addTodo}=useTodo()
    function add(e){
        e.preventDefault();
          addTodo(document.querySelector('input').value)
          document.querySelector('input').value=""
    }

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" onClick={(e)=>(add(e))}>
                Add
            </button>
            
        </form>
    );
}

export default TodoForm;

