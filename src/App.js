import './App.css';
import ThemeControl from './components/ThemeControl';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
    <ThemeControl/>
    <AddTask/>
    <TaskList/>
    <footer>Drag and drop to reorder list</footer>
    </>
  );
}

export default App;
