import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { dataGame, getProductsa } from '../../../connectFirebase/Connect'


var categories;
class TableCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentWillMount() {
    this.getCategories();
  }

  getCategories = () => {
    var categoriesLst = [];
    var i = 0;
    dataGame.ref('categories').on('value', (category) => {
      category.forEach(element => {
        categoriesLst[i] = element.val();
        categoriesLst[i].key = element.key;
        i++;
      });
      this.setState({ categories: categoriesLst });
    });

  }  

    render() {
      categories = this.state.categories ? this.state.categories.map((value, key) => (<tr key={key}>
        <td>{key}</td>
        <td>{value.ten}</td>
        <td><Link>Edit</Link> <br /><Link>Delete</Link></td>
      </tr>)) : <Fragment></Fragment>;
        return (
            <section id="main-content">
            <section className="wrapper">
              <div className="row">
                <div className="col-md-12 mt">
                  <div className="content-panel">
                    <h4><i className="fa fa-angle-right" /> Categories Table</h4><Link to ='/admin/category_add' className="btn btn-round btn-info justify-content-right d-inline-block " style={{marginLeft:"70%"}}>ADD CATEGORY</Link><hr /><table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                       {categories}
                        
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

export default TableCategories;