import './App.css';
import TodosPage from './pages/TodosPage';
import TodoDetails from './pages/TodoDetails';
import AppBar from './Components/AppBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
// would not typically hardcode urls, put into a config/context file for app
  return (
  <>
    <AppBar/>
    <div>
      <Routes>
        <Route path="/" element={<TodosPage />}/>
        <Route path=":id" element={<TodoDetails/>} />
        {/* add in create page */}
      </Routes>
      </div>
  </>
  );
}

export default App;
