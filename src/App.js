import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
     <Sidebar/>
     <Display/>
    </div>
  );
}

export default App;
