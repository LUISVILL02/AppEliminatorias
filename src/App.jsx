import {BrowserRouter} from 'react-router-dom';
import './App.css'
import Main from './components/main/Main.jsx'
import Rout from './components/Routes.jsx'

function App() {

  return (
    <BrowserRouter>
      <Rout/>
    </BrowserRouter>
  )
}

export default App
