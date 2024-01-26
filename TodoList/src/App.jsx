import { useEffect, useState } from 'react'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'
import { TodoContextProvider } from './context/TodoContext'


function App() {
  const [todo,setTodo]=useState([])
  const addTodo =(title)=>{
       setTodo((todo)=> {
        const newtodo={
          id:todo.length+1,
          title:title,
          checked:false
        }

        return [newtodo, ...todo]
       })
  }
  const updataTodo=(id,title)=>{
     setTodo((todo)=>(todo.map((item)=>(item.id===id? {id:item.id, title:title,checked:item.checked}:item))))
  }
  const deleteTodo=(id)=>{
         setTodo((todo)=>(todo.filter((item)=>(item.id!=id))))
  }
  const toggleComplete=(id)=>{
        setTodo((todo)=>(todo.map((item)=>(item.id===id? {id:item.id,title:item.title,checked:!item.checked}:item))))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodo(todos)
    }
  },[])
  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])

  return (
    <TodoContextProvider value={{todo,addTodo,updataTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <button type="submit" className=" rounded-xl px-3 py-1 bg-yellow-600 text-blue-50 shrink-0 m-4" onClick={(e)=>(setTodo([]))}>
                Delete All
            </button>
          
                    <div className="flex flex-wrap gap-y-3">
                        {todo.map((item)=>(
                          <div key={item.id} className='w-full'>
                            <TodoItem item={item}/>
                          </div>
                        ))}
                    </div>
                </div>
                
            </div>
    // </TodoContextProvider>
  )
}

export default App
