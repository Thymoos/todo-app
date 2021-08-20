import './App.css';
import AddTask from './components/AddTask';

import backgroundImage from './images/bg-desktop-dark.jpg';

function App() {
  return (
    <>
    <div className="background-image">
      <img src={backgroundImage} alt="Background" />
    </div>
    <AddTask/>
    <footer>Drag and drop to reorder list</footer>
    </>
  );
}

export default App;
