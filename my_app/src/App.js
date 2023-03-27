import logo from './logo.svg';
import './App.css';
import HEADER from './Header';
import HEADER2 from './Header2';

function App() {
  return (
    <div className="App">
      <HEADER favcol="yellow" />
      <HEADER2 favcol="blue" />
    </div>
  );
}

export default App;
