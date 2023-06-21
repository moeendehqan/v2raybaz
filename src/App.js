import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './style/style.css'
import Home from './pages/home';
import GetConfig from './pages/GetConfig';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/getconfig' element={<GetConfig />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
