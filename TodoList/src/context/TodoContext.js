import React, { useContext } from "react";

export const TodoContext=React.createContext({
     todo: [   ],
     addTodo : (title )=>{},
     updataTodo: (id,title)=>{},
     deleteTodo: (id)=>{},
     toggleComplete: (id)=>{}
});

export const TodoContextProvider=TodoContext.Provider

 const useTodo = ()=>{
    return useContext(TodoContext);
}
export default useTodo;