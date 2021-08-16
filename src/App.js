import './App.css';
import ThemeControl from './components/ThemeControl';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

import backgroundImage from './images/bg-desktop-dark.jpg';

function App() {
  return (
    <>
    <div className="background-image">
      <img src={backgroundImage} alt="Background" />
    </div>
    <ThemeControl/>
    <AddTask/>
    <TaskList/>
    <footer>Drag and drop to reorder list</footer>
    </>
  );
}

export default App;
