import './App.css';
import './components/Todo.css';
import Todo from "./components/Todo";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <Todo />
      <ListItems/>

    </div>
  );
}

export default App;
