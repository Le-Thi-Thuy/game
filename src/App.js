import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Redirect  } from "react-router-dom";
import './App.css';
import ShowProducts from './component/home/ShowProducts';
import UserInterface from './component/UserInterface';
import AdminInterface from './component/admin/AdminInterface';
import Cart from './component/cart/Cart';
import ProductDetails from './component/product-details/product-details';
import Checkout from './component/checkout/Checkout';
import Login from './component/login/Login';
import Register from './component/login/Register';
import TableProducts from './component/admin/products/TableProducts';
import FormProduct from './component/admin/products/FormProduct';
import TableUser from './component/admin/users/TableUser';
import TableCategories from './component/admin/categories/TableCategories';
import FormCategory from './component/admin/categories/FormCategory';
import TableBills from './component/admin/bills/TableBills';
import NoAuthority from './NoAuthority';

const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user') !=null
      ? (JSON.parse(localStorage.getItem('user')).role == 'admin'?<Component {...props} />:<Redirect to='/no_authority' />)
      : <Redirect to='/no_authority' />
  )} />
)
class App extends Component  {
  constructor(props) {
    super(props);
    this.state={
      login : localStorage.getItem('user')?true:false
    }
  }
  
  render() {
    return (
            <Router>
            <Route path="/" exact render={()=>(<UserInterface><ShowProducts/></UserInterface>)} />
          
       
           <Route path="/cart" render={()=>(<UserInterface><Cart/></UserInterface>)}/>
           <Route path="/productDetail/:id" component={ProductDetails}/>
           <PrivateRoute path="/admin/products" render={()=>(<AdminInterface><TableProducts/></AdminInterface>)}/>
           <PrivateRoute path="/admin/product_add" render={()=>(<AdminInterface><FormProduct/></AdminInterface>)}/>
        
           <PrivateRoute path="/admin/categories" render={()=>(<AdminInterface><TableCategories/></AdminInterface>)}/>
           <PrivateRoute path="/admin/category_add" render={()=>(<AdminInterface><FormCategory/></AdminInterface>)}/>
        
           <PrivateRoute path="/admin/users" render={()=>(<AdminInterface><TableUser/></AdminInterface>)}/>
           <PrivateRoute path="/admin/bills" render={()=>(<AdminInterface><TableBills/></AdminInterface>)}/>
           
        
           <Route path="/login" render={()=>{if(localStorage.getItem('user')==null)
              return <Login/> 
              else return (<UserInterface><ShowProducts/></UserInterface>)}}/>
           <Route path="/checkout" render={()=>{if(localStorage.getItem('user')==null)
              return <Login/> 
              else return (<UserInterface><Checkout/></UserInterface>)}}/>
         <Route path="/register" render={()=>(<Register/>)}/> 
         <PrivateRoute path="/admin" exact render={()=>(<AdminInterface><h1>welcom to Admin</h1></AdminInterface>)}/> 
         <Route path="/no_authority" component={NoAuthority}/>
    </Router>)

}}

 export default App;

 
 