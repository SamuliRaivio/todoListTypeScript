import React, { useState } from "react"
import { Todo } from "../interfaces"
import TodoTable from "./TodoTable"





export default function TodoList() {
    const [todo, setTodo] = useState<Todo>({description: '', date: '', priority: ''})
    const [todos, setTodos] = useState<Todo[]>([])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const handleClick = () => {
        setTodos([...todos, todo])
    }

    const deleteTodo = (todoToDeleteIndex: number) => {
        setTodos(todos.filter((todo, i) => i !== todoToDeleteIndex))
    }


    return(
        <div>
            <input placeholder="Description" name="description" value={todo.description} onChange={handleInputChange}></input>
            <input placeholder="Date" name="date" value={todo.date} onChange={handleInputChange}></input>
            <input placeholder="Priority" name="priority" value={todo.priority} onChange={handleInputChange}></input>
            <button onClick={handleClick}>add</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
            
        </div>
    )
}