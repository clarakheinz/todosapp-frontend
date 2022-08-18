import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

export default function TodoDetails() {
let params = useParams();
const [todo, setTodo] = useState([]);
const loadTodo = async () => {
    let todo = await fetch(`http://localhost:5050/todos/${params.id}`)
        .then(resp=>resp.json());
    setTodo(todo);
}


useEffect(()=>{
    loadTodo();
}, [])

return(
<div>
    <header>Todos Details</header>
    <h2>{params.id}</h2>
    <p>Is this task complete? {todo.isDone ? "Yes" : "No"}</p>

</div>
);
}