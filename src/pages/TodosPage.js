import Todo from '../Components/Todo';
import {useState, useEffect} from 'react';


export default function TodosPage() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async() => {
      let todosFetched = await fetch('http://localhost:5050/todos').then(resp=>resp.json());
      setTodos(todosFetched);
      console.log(todos);
    };
  
    useEffect(() => {
      fetchTodos();
    }, [])

    return(
        <div>
        <header>To do list</header>
        &nbsp;

  
        <ul>
          {todos && todos.map((todo)=>(
            <Todo id={todo._id} description={todo.description} isDone={todo.isDone} />
          ))}
        </ul>
      </div>
    )
}