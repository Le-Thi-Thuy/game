import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import Categories from './Categories';
// import {fetchProductList} from '../../store/actions';
import { dataGame, getProductsa ,getCategories } from '../../connectFirebase/Connect'
import xoadau from '../../xoaDau/XoaDau';

var productca;
class ShowProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: []
    }
  }

  componentDidMount = () => {
 
  this.getProducts();
  this.getCategories();
  }

  getProducts = () => {
    var productList = [];
    var i = 0;
    dataGame.ref('products').on('value', (product) => {
      product.forEach(element => {
        productList[i] = element.val();
        productList[i].key = element.key;
        i++;
      });
      this.setState({ products: productList });
    });
    
  }

  getCategories = () => {  
    var i=0;
    var categoryList = [];
    dataGame.ref('categories').on('value', (category) => {
      category.forEach(element => {
        categoryList[i] = element.val();
        // console.log(productList.length);
        i++;
        // console.log(i);


      });
      this.setState({ categories: categoryList });
    });
  }

  productCategory = (category) => {
    var list = [];
    this.state.products.forEach((element,index) => {
      if (xoadau(element.category) === category) {
        productca = <Product product={element} key={index} name={element.name} price={element.price} img={element.img} id={element.key} />;
        list.push(productca);
      }

    })
    return list;

  }


  render() {
    console.log(this.state.products);
    return (
      [<Categories key='1' />,
      <div className="amado_product_area section-padding-100" key='2'>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                {/* Total Products */}
                <div className="total-products">
                  <p>Showing 1-8 0f 25</p>
                  <div className="view d-flex">
                    <a href="#"><i className="fa fa-th-large" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-bars" aria-hidden="true" /></a>
                  </div>
                </div>
                {/* Sorting */}
                <div className="product-sorting d-flex">
                  <div className="sort-by-date d-flex align-items-center mr-15">
                    <p>Sort by</p>
                    <form action="#" method="get">
                      <select name="select" id="sortBydate">
                        <option value="value">Date</option>
                        <option value="value">Newest</option>
                        <option value="value">Popular</option>
                      </select>
                    </form>
                  </div>
                  <div className="view-product d-flex align-items-center">
                    <p>View</p>
                    <form action="#" method="get">
                      <select name="select" id="viewProduct">
                        <option value="value">12</option>
                        <option value="value">24</option>
                        <option value="value">48</option>
                        <option value="value">96</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">


            {this.state.categories.map((value, index) => {
              return <div key={index} id={xoadau(value.ten)}>{this.productCategory(xoadau(value.ten))}</div>
            })}
            {this.productCategory('hoale')}
          </div>
          <div className="row">
            <div className="col-12">
              {/* Pagination */}
              <nav aria-label="navigation">
                <ul className="pagination justify-content-end mt-50">
                  <li className="page-item active"><a className="page-link" href="#">01.</a></li>
                  <li className="page-item"><a className="page-link" href="#">02.</a></li>
                  <li className="page-item"><a className="page-link" href="#">03.</a></li>
                  <li className="page-item"><a className="page-link" href="#">04.</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      ]
    );
  }
}

const mapStateToProps = state => (
  {
    
  });
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (getItem) => {
      dispatch({type:"ADD_TO_CART",getItem})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowProducts)
