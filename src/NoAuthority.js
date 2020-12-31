import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoAuthority extends Component {
    constructor(props) {
        super(props);
        this.state={
          login : localStorage.getItem('user')?true:false
        }
      }
    render() {
        return this.state.login ?(
            <div style={{textAlign: "center"}}>
                <h1>Bạn không có quyền truy cập trang web này .</h1>
                <Link to="/"><h1>Bấm vào đây để quay lại trang chủ</h1></Link>
            </div>
        ):(<div style={{textAlign: "center"}}>
            <h1>Bạn chưa đăng nhập .</h1> 
            <Link to='/login'><h1>Bấm vào đây để đăng nhập</h1></Link>
        </div>)
    }
}

export default NoAuthority;