import React, { Component, Fragment } from 'react';
import { dataGame, getProductsa } from '../../../connectFirebase/Connect'
import { Link } from 'react-router-dom';

var users;
class TableUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
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

  render() {
    console.log(this.state.users);
    users = this.state.users ? this.state.users.map((value, key) => (<tr key={key}>
      <td>{key}</td>
      <td>{value.fullname}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.address}</td>
      <td>{value.phone}</td>
      <td>{value.role}</td>
      <td><img width='100px' height='100px' style={{width:"100px",height:"100px"}} src={value.linkimg} /></td>
      <td><Link>Edit</Link> <br /><Link>Delete</Link></td>
    </tr>)) : <Fragment></Fragment>;
    return (
      <section id="main-content">
        <section className="wrapper">
          <div className="row">
            <div className="col-md-12 mt">
              <div className="content-panel">
                <h4><i className="fa fa-angle-right" /> Products Table</h4> <hr /><table className="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>UserName </th>
                      <th>Email</th>
                      <th>Adress</th>
                      <th>Phone</th>
                      <th>Role</th>
                      <th>Img</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users}

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

export default TableUser;