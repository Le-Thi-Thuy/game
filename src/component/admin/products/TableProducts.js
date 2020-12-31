import React, { Component, Fragment } from 'react';
import { dataGame, getProductsa } from '../../../connectFirebase/Connect'
import { Link } from 'react-router-dom';


var products;
class TableProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }


  componentWillMount() {
  this.getProducts();
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

  render() {
    console.log(this.state.products);

    products = this.state.products ? this.state.products.map((value, key) => (<tr key={key}>
      <td>{key}</td>
      <td>{value.name}</td>
      <td><img width= '100px' height='100px' style={{width:"100px",height:"100px"}} src ={value.img}/></td>
      <td>{value.price}</td>
      <td>{value.category}</td>
      <td>{value.describe}</td>
      <td><Link>Edit</Link> <br/><Link>Delete</Link></td>
    </tr>)) : <Fragment></Fragment>;
    return (
      <section id="main-content">
        <section className="wrapper">
          <div className="row">
            <div className="col-md-12 mt">
              <div className="content-panel">
                
                <h4 className="d-inline-block"><i className="fa fa-angle-right " /> Products Table</h4><Link to ='/admin/product_add' className="btn btn-round btn-info justify-content-right d-inline-block " style={{marginLeft:"70%"}}>ADD PRODUCT</Link><hr /><table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Img</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Describe</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products}
                  </tbody>
                </table>
              </div>{/* --/content-panel --*/}
            </div>{/* /col-md-12 */}
          </div>
        </section>{/* --/wrapper --*/}
      </section>

    );
  }
}

export default TableProducts;