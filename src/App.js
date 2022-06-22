import logo from './logo.svg';
import './App.css';
import { Button} from '@mui/material';
import Navbar from './components/navbar';
import Home from './Pages/Home';
import CategoryCard from './components/Categorycard';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import Otp from './Pages/Otp';
import Deals from './Pages/Deals';
import { Routes,Route } from 'react-router-dom';
import CartDetail from './Pages/CartDetail';
import { Requiredauth } from './HOC/RequiredAuth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/deals" element={<Deals/>}/>
       <Route path="/otp" element={<Otp/>}/>
       <Route path= "/cartdetail" element={
        <Requiredauth>
       <CartDetail/>
       </Requiredauth>}/>
      </Routes>




    </div>
  );
}

export default App;
