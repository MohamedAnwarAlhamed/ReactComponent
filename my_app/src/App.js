import logo from './logo.svg';
import './App.css';
import HEADER from './Header';
import HEADER2 from './Header2';
import HEADER3 from './Header3';

function App() {
  return (
    <div className="App">
      <HEADER favcol="yellow" />
      <HEADER2 favcol="blue" />
      <HEADER3 favcol="green" />
    </div>
  );
}

export default App;
