import React, { Component, Fragment } from 'react';
import Subscribe from './layout/Subscribe';
import SlideBar from './layout/SlideBar';
import Footer from './layout/Footer';
import  './UserInterface.css';
import ShowProducts from './home/ShowProducts';
import { BrowserRouter as Router,IndexRoute, Route, Link, NavLink } from "react-router-dom";

class UserInterface extends Component {
    render() {

        return (
            <Fragment>
            <div className="search-wrapper section-padding-100">
              <div className="search-close">
                <i className="fa fa-close" aria-hidden="true" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="search-content">
                      <form action="#" method="get">
                        <input type="search" name="search" id="search" placeholder="Type your keyword..." />
                        <button type="submit"><img src="img/core-img/search.png" alt="" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Search Wrapper Area End */}
            {/* ##### Main Content Wrapper Start ##### */}
            <div className="main-content-wrapper d-flex clearfix">
              {/* Mobile Nav (max width 767px)*/}
              <div className="mobile-nav">
                {/* Navbar Brand */}
                <div className="amado-navbar-brand">
                  <a ><img src="img/core-img/logo.png" alt="" /></a>
                </div>
                {/* Navbar Toggler */}
                <div className="amado-navbar-toggler">
                  <span /><span /><span />
                </div>
              </div>
              {/* Header Area Start */}
             <SlideBar/>
              {/* Header Area End */}
              {/* <Categories/> */}
              {/* <ProductDetails/> */}
              {this.props.children}
             
              {/* <Checkout/> */}
             </div>
            {/* ##### Main Content Wrapper End ##### */}
            {/* ##### Newsletter Area Start ##### */}
           <Subscribe/> {/* ##### Newsletter Area End ##### */}
            {/* ##### Footer Area Start ##### */}
            <Footer/>
           </Fragment>
        );
    }
}

export default UserInterface;