
import { useState } from "react"

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import './TodoMain.css';


export default function TodoMain() {

    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "Career growth",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Punctuality",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Acuracy",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Career growth",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Punctuality",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Acuracy",
            isCompleted: false
        }
    ]);


    return (
        <div>
            <TodoForm onAdd={(text) => {
                setTodos([
                    {
                        id: Math.random(),
                        text: text,
                        isCompleted: false
                    },
                    ...todos
                ]);
            }} />
            <div className="container">
                <TodoList todos={todos}/>
            </div>
            
        </div>
    )
}