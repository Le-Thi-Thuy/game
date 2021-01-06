
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class FormCategory extends Component {
    constructor(props) {
        super(props);
        this.state ={
            ten:'',
            

        }
        

    }
    

    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    addCategory =()=>{

        var category ={
            ten:this.state.ten
        
        }
        this.props.addCategory(category);
    }
    render() {
        return (
            <section id="main-content">
  <section className="wrapper">
    <div className="row mt">
      <div className="col-lg-12">
        <div className="form-panel">
          <h4 className="mb"><i className="fa fa-angle-right" /> New category </h4>
          <form className="form-horizontal style-form" method="get">
            <div className="form-group">
              <label className="col-sm-2 col-sm-2 control-label" >Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="ten" onChange ={(event) => this.isChange(event)}/>
              </div>
            </div>
            
            <button type="button" class="btn btn-round btn-info justify-content-right d-inline-block " style={{marginLeft:"80%"}} onClick={()=>this.addCategory()}>Add</button>
             
            <Link  to= '/admin/categories' type="button" class="btn btn-round btn-danger justify-content-right d-inline-block" style={{marginLeft:"3%"}}>Cancel</Link>
             
            </form>
        </div>
      </div>{/* col-lg-12*/}      	
    </div>{/* /row */}
  </section></section>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCategory: (getItem) => {
            dispatch({type:"ADD_CATEGORY",getItem})
        }
    }
}
export default connect(null, mapDispatchToProps)(FormCategory);