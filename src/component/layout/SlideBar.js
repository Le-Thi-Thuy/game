import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem("user"),
      // carts: this.props.carts,
      carts: localStorage.getItem("carts")
        ? JSON.parse(localStorage.getItem("carts"))
        : [],
      cartLength: this.props.cartLength
    };
  }

  logout = () => {
    // this.props.addUserCart(JSON.parse(this.state.user).key);

    localStorage.removeItem("user");
    this.setState({ user: null });
  };
  user = () => {
    if (this.state.user !== null)
      return [
        <a key="1" className="search-nav">
          <img
            style={{ width: "34%" }}
            src={JSON.parse(localStorage.getItem("user")).linkimg}
          />
          {JSON.parse(localStorage.getItem("user")).username}
        </a>,
        <button
          key="2"
          className="btn amado-btn active"
          onClick={() => this.logout()}
        >
          <img />
          LOGOUT
        </button>
      ];
    else return <a href="/login">Login</a>;
  };
  cartLength = () => {
    return this.state.carts
      ? JSON.parse(localStorage.getItem("carts")).length
      : 0;
  };
  render() {
    return (
      <header className="header-area clearfix">
        {/* Close Icon */}
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true" />
        </div>
        {/* Logo */}
        <div className="logo" style={{ margin: "0" }}>
          <Link to="/">
            <img src="img/core-img/logo.png" alt="" />
          </Link>
        </div>
        {/* Amado Nav */}
        <nav className="amado-nav">
          <ul>
            <li className="active">
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/cart">Giỏ hàng</Link>
            </li>
            <li>
              <Link to="/checkout">Thanh toán</Link>
            </li>
          </ul>
        </nav>
        {/* Button Group */}
        <div className="amado-btn-group mt-30 mb-100">
          <a href="#" className="btn-nav btn amado-btn mb-15">
            Giảm giá
          </a>
          <a href="#" className="btn-nav btn amado-btn active">
            Mới nhất
          </a>
        </div>
        {/* Cart Menu */}
        <div className="cart-fav-search mb-100">
          <Link to="/cart" className="cart-nav">
            <img src="img/core-img/cart.png" alt="" /> Giỏ hàng{" "}
            <span>({this.props.cartLength})</span>
          </Link>
          <a href="#" className="fav-nav">
            <img src="img/core-img/favorites.png" alt="" /> Đánh giá
          </a>
          <a href="#" className="search-nav">
            <img src="img/core-img/search.png" alt="" /> Tìm kiếm
          </a>
          {this.user()}
        </div>
        {/* Social Button */}
        <div className="social-info d-flex justify-content-between">
          <a href="#">
            <i className="fa fa-pinterest" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    carts: state.carts,
    cartLength: state.cartLength
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUserCart: userId => {
      dispatch({ type: "ADD_CART_USER", userId });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideBar);
