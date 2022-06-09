import './App.css';
import UseEffectClass from './components/UseEffectClass';
import UseEffectFunction from './components/UseEffectFunction';
import Repositorios from './components/api/Repositorios';
import TodoList from './components/todos/TodoList';
import TodoListCallback from './components/todos/TodoListCallback';
import UseCallbackMemo from './components/todos/UseCallbackMemo';
function App() {
  return (
    <div className="App">
      <UseEffectClass/>
      <UseEffectFunction/>
      <Repositorios/>
      <TodoList/>
      <TodoListCallback/>
      <UseCallbackMemo/>
    </div>
  );
}

export default App;
