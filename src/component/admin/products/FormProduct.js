import React, { Component } from 'react';
import {connect} from 'react-redux';

class FormProduct extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'',
            category:'',
            img:'',
            price:'',
            describe:''

        }
        

    }
    

    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    addProduct =()=>{
        var product ={
            name:this.state.name,
            price:this.state.price,
            img:this.state.img,
            category:this.state.category,
            describe:this.state.describe
        
        }
        this.props.addProduct(product);
    }
    render() {
        return (
            <section id="main-content">
  <section className="wrapper">
    <div className="row mt">
      <div className="col-lg-12">
        <div className="form-panel">
          <h4 className="mb"><i className="fa fa-angle-right" /> New Product </h4>
          <form className="form-horizontal style-form" method="get">
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="name" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Category</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="category" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Price</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name ="price" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Img</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name ="img" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Describe</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name ="describe" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Quantity in stock</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name ="Quantitys" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            <button type="button" class="btn btn-round btn-info justify-content-right d-inline-block " style={{marginLeft:"80%"}} onClick={()=>this.addProduct()}>Add</button>
             
            <button type="button" class="btn btn-round btn-danger justify-content-right d-inline-block" style={{marginLeft:"3%"}}>Cancel</button>
             
            </form>
        </div>
      </div>{/* col-lg-12*/}      	
    </div>{/* /row */}
  </section></section>

        );
    }
}
// const mapDispatchToProps  = (dispatch, ownProps) => {
//     return {     
//         addProduct: (getItem) => {
//             dispatch({type:"ADD_PRODUCT",getItem})
//         }             
        
//     }
// }
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addProduct: (getItem) => {
            dispatch({type:"ADD_PRODUCT",getItem})
        }
    }
}
export default connect(null, mapDispatchToProps)(FormProduct);