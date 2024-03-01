import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
function App() {
  return (
    <>

    <Routes>
    <Route path='/'element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/>
      
      </Routes>
    </>
  )
}

export default App
