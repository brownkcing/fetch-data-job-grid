import './App.css';
import Title from './components/contentText';
import Navbar from './components/navbar';
import Data from  './components/data';


function App() {
  return (
    <div className="App">
   
      <Navbar />
      <Title />
      <Data />
    </div>
  );
}

export default App;
