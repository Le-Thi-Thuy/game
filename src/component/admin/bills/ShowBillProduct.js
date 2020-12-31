import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

var products;
class ShowBillProduct extends Component {
    render() {

        products = this.props.products ? this.props.products.map((value, key) => (<tr>
            <td>{key}</td>
            <td>{value.name}</td>
            <td><img width='100px' height='100px' style={{width:"100px",height:"100px"}} src={value.img} /></td>
            <td>{value.price}</td>
            <td>{value.category}</td>
            <td>{value.describe}</td>
            <td>{value.quantity}</td>
            
        </tr>)) : <Fragment></Fragment>;
        return (
            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-md-12 mt">
                            <div className="content-panel">

                                <h4 className="d-inline-block"><i className="fa fa-angle-right " /> Products Table</h4><button onClick={()=>this.props.exit()} className="btn btn-round btn-info justify-content-right d-inline-block " style={{ marginLeft: "70%" }}>EXIT</button ><hr /><table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Img</th>
                                            <th>Price</th>
                                            <th>Category</th>
                                            <th>Describe</th>
                                            <th>Quantity</th>
                                            
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

export default ShowBillProduct;