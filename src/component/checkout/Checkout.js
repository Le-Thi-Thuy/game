import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
      fullname: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).fullname : null,
      phone: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).phone : null,
      address: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).address : null,
      email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : null,
      carts: localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
    }
  }

  addBill=()=>{
    var bill = {
      fullname:this.state.fullname,
      phone: this.state.phone,
      address: this.state.address,
      email:this.state.email,
      total:this.props.total,
      products :this.state.carts
    };
    console.log(bill);
    this.props.addBill(this.state.user.key,bill)
  }
  render() {
    this.props.getTotalCart();

    return (
      <div className="cart-table-area section-padding-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="checkout_details_area mt-50 clearfix">
                <div className="cart-title">
                  <h2>Thanh toán</h2>
                </div>
                <form action="#" method="post">
                  <div className="row">
                   
                    <div className="col-12 mb-3">
                      <input type="text" className="form-control" defaultValue={this.state.fullname}  placeholder="Full Name" />
                    </div>
                  
                    <div className="col-12 mb-3">
                      <input type="email" className="form-control" defaultValue={this.state.email} id="email" placeholder="Email" />
                    </div>
                    <div className="col-12 mb-3">
                      {/* <select className="w-100" id="country" style={{ display: 'none' }}>
                        <option value="usa">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ger">Germany</option>
                        <option value="fra">France</option>
                        <option value="ind">India</option>
                        <option value="aus">Australia</option>
                        <option value="bra">Brazil</option>
                        <option value="cana">Canada</option>
                      </select><div className="nice-select w-100 open" tabIndex={0}><span className="current">United States</span><ul className="list"><li data-value="usa" className="option selected focus">United States</li><li data-value="uk" className="option">United Kingdom</li><li data-value="ger" className="option">Germany</li><li data-value="fra" className="option">France</li><li data-value="ind" className="option">India</li><li data-value="aus" className="option">Australia</li><li data-value="bra" className="option">Brazil</li><li data-value="cana" className="option">Canada</li></ul></div> */}
                    </div>
                    <div className="col-12 mb-3">
                      <input type="text" className="form-control mb-3" id="street_address" defaultValue={this.state.address} placeholder="Address" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" id="zipCode" placeholder="Zip Code" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="number" className="form-control" defaultValue={this.state.phone}  placeholder="Phone No" />
                    </div>
                    <div className="col-12 mb-3">
                      <textarea name="comment" className="form-control w-100" id="comment" cols={30} rows={10} placeholder="Leave a comment about your order" defaultValue={""} />
                    </div>
                    <div className="col-12">
                      <div className="custom-control custom-checkbox d-block mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Create an accout</label>
                      </div>
                      <div className="custom-control custom-checkbox d-block">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Ship to a different address</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="cart-summary">
                <h5>Cart Total</h5>
                <ul className="summary-table">
                    <li><span>subtotal:</span> <span>{this.props.total} vnđ</span></li>
                  <li><span>delivery:</span> <span>Free</span></li>
                  <li><span>total:</span> <span>{this.props.total} vnđ</span></li>
                </ul>
                <div className="payment-method">
                  {/* Cash on delivery */}
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="cod" defaultChecked />
                    <label className="custom-control-label" htmlFor="cod">Cash on Delivery</label>
                  </div>
                  {/* Paypal */}
                  <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="paypal" />
                    <label className="custom-control-label" htmlFor="paypal">Paypal <img className="ml-15" src="img/core-img/paypal.png" alt="" /></label>
                  </div>
                </div>
                <div className="cart-btn mt-100">
                  <button  className="btn amado-btn w-100" onClick ={() => this.addBill()}>Checkout</button>
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
    total: state.totalCarts
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addBill: (userId,bill) => {
      dispatch({type:'ADD_BILL',userId,bill})
    },
    getTotalCart: () => {
      dispatch({type:"GET_TOTAL"})
    }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Checkout);