import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import AllRoutes from './AllRoutes'
// import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      {/* <AllRoutes/> */}
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>}/>

        
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

