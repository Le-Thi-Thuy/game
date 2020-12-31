import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Product extends Component {
  addCart =(event,product)=>{
    
    event.preventDefault();
    product.quantity =1;
    this.props.addToCart(product);

  }
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-12 col-xl-6">
        <div className="single-product-wrapper">
          {/* Product Image */}
          <div className="product-img">
            <img src={this.props.img} alt="" width = '335px' height ='417px'/>
            {/* Hover Thumb */}
            <img className="hover-img" src={this.props.img}  alt="" />
          </div>
          {/* Product Description */}
          <div className="product-description d-flex align-items-center justify-content-between">
            {/* Product Meta Data */}
            <div className="product-meta-data">
              <div className="line" />
              <p className="product-price">${this.props.price} vnđ</p>
              <Link to={'/productDetail/' + this.props.id}>
                <h6 className='ProductName'>{this.props.name}</h6></Link>
            </div>
            {/* Ratings & Cart */}
            <div className="ratings-cart text-right">
              <div className="ratings">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
              </div>
              <div className="cart">
                <a onClick ={(event) => this.addCart(event,this.props.product)} data-toggle="tooltip" data-placement="left" title="Add to Cart"><img src="img/core-img/cart.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (getItem) => {
      dispatch({type:"ADD_TO_CART",getItem})
    }
  }
}
export default connect(null, mapDispatchToProps)(Product);