import {Todo } from "../interfaces";

interface Props  {
    todos: Todo[]
    deleteTodo: (i: number) => void
}



export default function TodoTable({todos, deleteTodo}: Props) {
    

    return(
        <div>
            <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <tbody>
                    {todos.map((todo, i) =>
                        <tr key={i}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                            <td><button onClick={() => deleteTodo(i)}>delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}