import { useState } from 'react';

export default function TodoForm(props) {
    const [newTodo, setNewTodo] = useState("");
    const [loading, setLoading] = useState(false);
    
    async function addTodo() {
        setLoading(true);
        let resp = await fetch('http://localhost:5050/todos', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({description: newTodo})
        }).then(resp=>resp.json());
        props.onNew();
        setNewTodo("");
        setLoading(false);
    }


    return(
      <form>
        <label htmlFor="newTodo">New Todo: </label>
        <input id="newTodo" value={newTodo} type="text" name="newTodo" onChange={(e)=>setNewTodo(e.target.value)}/>
        <button type="button" disabled={loading} onClick={addTodo}>Add</button>
      </form>
    );
}