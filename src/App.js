import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style/style.css'
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
