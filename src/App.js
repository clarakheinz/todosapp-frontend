import './App.css';
import Todo from './Components/Todo';
import { useEffect, useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodosPage from './pages/TodosPage';
import TodoDetails from './pages/TodoDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
// would not typically hardcode ulrs, put into a config/context file for app
  return (
    <div>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<TodosPage />}/>
      <Route path=":id" element={<TodoDetails/>} />
    </Routes>
   </BrowserRouter> 
  </div>
  );
}

export default App;
