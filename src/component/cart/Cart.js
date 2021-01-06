import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
var productCart;
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: this.props.carts
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // this.props.getTotal();
  }
  
  getProduct = () => {
    if (this.state.carts) {
      productCart = this.state.carts.map((value, key) => {
        return (
          <tr key={key}>
            <td className="cart_product_img">
              <a href="#"><img src={value.img} alt="Product" /></a>
            </td>
            <td className="cart_product_desc">
              <h5>{value.name}</h5>
            </td>
            <td className="price">
              <span>{value.price} vnđ</span>
            </td>
            <td className="qty">
              <div className="qty-btn d-flex">
                <p>Qty</p>
                <div className="quantity">
                  <span className="qty-minus" onClick={() => this.qty('remove', value, key)}><i className="fa fa-minus" aria-hidden="true" /></span>
                  <input type="number" className="qty-text" id="qty" step={1} min={1} max={300} name="quantity"  value={value.quantity} />
                  <span className="qty-plus" onClick={() => this.qty('add', value, key)}><i className="fa fa-plus" aria-hidden="true" /></span>
                </div>
              </div>
            </td>
          </tr>
        )


      })
    }


  }

  qty = (action, item, index) => {
    console.log(item);
    console.log(this.props.carts[index]);
    if (action == 'add') {
      this.props.carts[index]['quantity'] = this.props.carts[index]['quantity'] + 1;
    } else {
      this.props.carts[index]['quantity'] = (this.props.carts[index]['quantity'] - 1 <= 0) ? 0 : this.props.carts[index]['quantity'] - 1;
      if (this.props.carts[index]['quantity'] <= 0) {
        this.props.carts.splice(index, 1);
      }
    }
    this.setState({ carts: this.props.carts });
    localStorage.setItem('carts', JSON.stringify(this.state.carts))
  }
 


  render() {
    this.getProduct();
    this.props.getTotalCart();
    // console.log( this.props.getTotal);
    return (
      <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="cart-title mt-50">
                <h2>Giỏ hàng</h2>
              </div>
              <div className="cart-table clearfix">
                <table className="table table-responsive">
                  <thead>
                    <tr>
                      <th />
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productCart}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="cart-summary">
                <h5>Giá</h5>
                <ul className="summary-table">
                  <li><span>Giá:</span> <span>{this.props.total} vnđ</span></li>
                  <li><span>Giảm:</span> <span>Free</span></li>
                  <li><span>Tổng giá:</span> <span>{this.props.total} vnđ</span></li>
                </ul>
                <div className="cart-btn mt-100">
                  <Link to="/checkout" className="btn amado-btn w-100">Thanh toán</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    carts: state.carts,
    total: state.totalCarts
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTotalCart: () => {
      dispatch({type:"GET_TOTAL"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

