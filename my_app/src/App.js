import logo from './logo.svg'
import './App.css'
import HEADER from './Header'
import HEADER2 from './Header2'
import HEADER3 from './Header3'
import CLICKCOUNTER from './components/ClickCounter'
import HOVERCOUNTER from './components/HoverCounter'
import MODEL from './components/Model'
import PRODUCTS from './components/products'
import ERRORBOUNDRY from './components/ErrorBoundry'
function App() {
  return (
    <div className="App">
      <ERRORBOUNDRY>
        <PRODUCTS product={'banana'} />
      </ERRORBOUNDRY>
      <ERRORBOUNDRY>
        <PRODUCTS product={'orange'} />
      </ERRORBOUNDRY>
      <ERRORBOUNDRY>
        <PRODUCTS product={'apple'} />
      </ERRORBOUNDRY>
    </div>
  )
}

export default App
