import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductScreen from './screens/ProductScreen';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import './index.css'
import Producto from './components/Producto';
import SigIn from './screens/SigIn';
import ShippingAdress from './screens/ShippingAdress';
import SignUp from './screens/SignUp';

function App() {

  const { state } = useContext(Store);
  const { cart } = state
  return (

    <div className='App'>
      <NavBar />
      <Producto />
      <Routes>
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/signin' element={<SigIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route path='/shipping' element={<ShippingAdress />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>


  );
}

export default App;
