import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: JSON.parse(localStorage.getItem("user"))
    }
  }
  
  render() {
    return (
      <aside>
        <div id="sidebar" className="nav-collapse ">
          {/* sidebar menu start*/}
          <ul className="sidebar-menu" id="nav-accordion">
            <p className="centered"><a href="profile.html"><img src={this.state.user.linkimg} className="img-circle" style={{width:"70px",height:"70px"}} width={60} /></a></p>
    <h5 className="centered" style={{marginTop: "20px",
    fontSize: "20px"}}>{this.state.user.fullname}</h5>
            <li className="mt">
              <Link  to = "/admin"className="dcjq-parent" >
                <i className="fa fa-dashboard" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sub-menu dcjq-parent-li">
              <Link to ='/admin/users' className="dcjq-parent">
                <i className="fa fa-th" />
                <span>Users Table</span>
                <span className="dcjq-icon" /></Link>
              <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                <li><a href="basic_table.html">Admin Table</a></li>
                <li><a href="responsive_table.html">User Table</a></li>
              </ul>
            </li>
            <li className="sub-menu dcjq-parent-li">
              <Link to ='/admin/bills' className="dcjq-parent">
                <i className="fa fa-th" />
                <span>Bills Table</span>
                <span className="dcjq-icon" /></Link>
              <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                <li><a href="basic_table.html">All Bill</a></li>
                <li><a href="basic_table.html">Bill Accept</a></li>
                <li><a href="responsive_table.html">User Table</a></li>
              </ul>
            </li>
            <li className="sub-menu dcjq-parent-li">
              <Link to ='/admin/products' className="dcjq-parent">
                <i className="fa fa-th" />
                <span>Products Table</span>
                <span className="dcjq-icon" /></Link>
              <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                <li><a href="basic_table.html">Products</a></li>

              </ul>
            </li>
            <li className="sub-menu dcjq-parent-li">
              <Link to ='/admin/categories' className="dcjq-parent">
                <i className="fa fa-th" />
                <span>Categories Table</span>
                <span className="dcjq-icon" /></Link>
              <ul className="sub" style={{ overflow: 'hidden', display: 'none' }}>
                <li><a href="basic_table.html">Products</a></li>

              </ul>
            </li>

          </ul>
          {/* sidebar menu end*/}
        </div>
      </aside>

    );
  }
}

export default Menu;