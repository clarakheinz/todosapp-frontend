import{useState} from 'react';
import {Link} from 'react-router-dom';

export default function Todo(props) {

  const {description, isDone, id} = props;
  const [isDoneState, setIsDoneState] = useState(isDone);

  const handleClick = async () => {
      let resp = await fetch(`http://localhost:5050/todos/${id}`, {method: "PUT",
      headers: {
          "Content-type" : "application/json"
      },
      body: JSON.stringify({isDone: !isDoneState})
      }).then(resp=>resp.json());
      setIsDoneState(!isDoneState);
  }

    return (
      <li id = {id} className= {`todo ${isDoneState ? "isDone" : ""}`}>
        <Link to={id}>{description}</Link>
        {!isDoneState &&
          <button onClick={handleClick}>Done</button>
        }
        {isDoneState &&
        <button onClick={handleClick}>Undo</button>
        }
      </li>
    );
  }
  