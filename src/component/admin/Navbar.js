import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header className="header black-bg">
  <div className="sidebar-toggle-box">
    <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation" />
  </div>
  {/*logo start*/}
  <a href="index.html" className="logo"><b>DASHGUM FREE</b></a>
  {/*logo end*/}
  <div className="nav notify-row" id="top_menu">
    {/*  notification start */}
    <ul className="nav top-menu">
      {/* settings start */}
      <li className="dropdown">
        <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
          <i className="fa fa-tasks" />
          <span className="badge bg-theme">4</span>
        </a>
        <ul className="dropdown-menu extended tasks-bar">
          <div className="notify-arrow notify-arrow-green" />
          <li>
            <p className="green">You have 4 pending tasks</p>
          </li>
          <li>
            <a href="index.html#">
              <div className="task-info">
                <div className="desc">DashGum Admin Panel</div>
                <div className="percent">40%</div>
              </div>
              <div className="progress progress-striped">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                  <span className="sr-only">40% Complete (success)</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="index.html#">
              <div className="task-info">
                <div className="desc">Database Update</div>
                <div className="percent">60%</div>
              </div>
              <div className="progress progress-striped">
                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  <span className="sr-only">60% Complete (warning)</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="index.html#">
              <div className="task-info">
                <div className="desc">Product Development</div>
                <div className="percent">80%</div>
              </div>
              <div className="progress progress-striped">
                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="index.html#">
              <div className="task-info">
                <div className="desc">Payments Sent</div>
                <div className="percent">70%</div>
              </div>
              <div className="progress progress-striped">
                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                  <span className="sr-only">70% Complete (Important)</span>
                </div>
              </div>
            </a>
          </li>
          <li className="external">
            <a href="#">See All Tasks</a>
          </li>
        </ul>
      </li>
      {/* settings end */}
      {/* inbox dropdown start*/}
      <li id="header_inbox_bar" className="dropdown">
        <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
          <i className="fa fa-envelope-o" />
          <span className="badge bg-theme">5</span>
        </a>
        <ul className="dropdown-menu extended inbox">
          <div className="notify-arrow notify-arrow-green" />
          <li>
            <p className="green">You have 5 new messages</p>
          </li>
          <li>
            <a href="index.html#">
              <span className="photo"><img alt="avatar" src="assets/img/ui-zac.jpg" /></span>
              <span className="subject">
                <span className="from">Zac Snider</span>
                <span className="time">Just now</span>
              </span>
              <span className="message">
                Hi mate, how is everything?
              </span>
            </a>
          </li>
          <li>
            <a href="index.html#">
              <span className="photo"><img alt="avatar" src="assets/img/ui-divya.jpg" /></span>
              <span className="subject">
                <span className="from">Divya Manian</span>
                <span className="time">40 mins.</span>
              </span>
              <span className="message">
                Hi, I need your help with this.
              </span>
            </a>
          </li>
          <li>
            <a href="index.html#">
              <span className="photo"><img alt="avatar" src="assets/img/ui-danro.jpg" /></span>
              <span className="subject">
                <span className="from">Dan Rogers</span>
                <span className="time">2 hrs.</span>
              </span>
              <span className="message">
                Love your new Dashboard.
              </span>
            </a>
          </li>
          <li>
            <a href="index.html#">
              <span className="photo"><img alt="avatar" src="assets/img/ui-sherman.jpg" /></span>
              <span className="subject">
                <span className="from">Dj Sherman</span>
                <span className="time">4 hrs.</span>
              </span>
              <span className="message">
                Please, answer asap.
              </span>
            </a>
          </li>
          <li>
            <a href="index.html#">See all messages</a>
          </li>
        </ul>
      </li>
      {/* inbox dropdown end */}
    </ul>
    {/*  notification end */}
  </div>
  <div className="top-menu">
    <ul className="nav pull-right top-menu">
      <li><a className="logout" href="login.html">Logout</a></li>
    </ul>
  </div>
</header>

        );
    }
}

export default Navbar;