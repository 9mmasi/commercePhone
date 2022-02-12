import React, { Component } from 'react';
import { Route,Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from './components/Default';
import NavBar from './components/navBar';
import ProductDetail from './components/productDetail';
import ProductList from './components/productList';
import InCart from './components/Cart/inCart';
//import Model from './components/Model';



export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Routes>
         <Route exact path='/' element={<ProductList />} />
         <Route path='/productDetail' element={<ProductDetail />} />
         <Route path='/inCart' element={<InCart />} />
         <Route path="*" element={Default}  status={404}/>
       </Routes>
      </div>
    );
  }
}

