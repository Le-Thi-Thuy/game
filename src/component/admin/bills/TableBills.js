import React, { Component, Fragment } from 'react';
import { dataGame, getProductsa } from '../../../connectFirebase/Connect'
import { Link } from 'react-router-dom';
import TableProducts from '../products/TableProducts';
import ShowBillProduct from './ShowBillProduct';
var bills;
class TableBills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isShowProducts : false,
      listProduct : []
    }
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    var UserLIst = [];
    var i = 0;
    dataGame.ref('users').on('value', (user) => {
      user.forEach(element => {
        UserLIst[i] = element.val();
        UserLIst[i].key = element.key;
        i++;
      });
      this.setState({ users: UserLIst });
    });

  }
   showDetail =(products) =>{
    this.setState({isShowProducts:true,
    listProduct:products});
   }
   exitButton =()=>{
     this.setState({isShowProducts:false});
   }
  render() {
    var i=0;
    bills = this.state.users ? this.state.users.map((value, key) => {
      console.log('aaaa');
      console.log(value.key);
    if(value.bills !== undefined) {  //value.bills = null;
      return Object.keys(value.bills).map((val,k) =>(
      // console.log(value.bills[val]);}
      
        (<tr key={k}>
          <td>{i++}</td>
          <td>{value.bills[val].fullname}</td>
          <td>{value.bills[val].email}</td>
          <td>{value.bills[val].address}</td>
          <td>{value.bills[val].phone}</td>
          <td>{value.bills[val].total}</td>
          {console.log(value.bills[val].products[1])}
          <td><button className="btn btn-round btn-info justify-content-right d-inline-block "   onClick = {()=>this.showDetail(value.bills[val].products)}>Detail</button></td>
        </tr>)
      )) } else return <Fragment key={key}></Fragment>;
    }) : <Fragment></Fragment>;
    return !this.state.isShowProducts ? 
     (
      <section id="main-content">
        <section className="wrapper">
          <div className="row">
            <div className="col-md-12 mt">
              <div className="content-panel">
                <h4><i className="fa fa-angle-right" /> Bill Table</h4><hr /><table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Adress</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {bills}
                  </tbody>
                </table>
              </div>{/* --/content-panel --*/}
            </div>{/* /col-md-12 */}
          </div>
        </section>{/* --/wrapper --*/}
      </section>
    ) :  <ShowBillProduct products ={this.state.listProduct} exit={this.exitButton}/>
  }
}

export default TableBills;