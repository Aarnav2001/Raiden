import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { useHistory } from 'react-router';
import {useDispatch} from "react-redux";
import {AUTH, LOGOUT} from "../redux/actionTypes";

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {  
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <i className="mdi mdi-menu"></i>
          </button>
          <div className="col-sm-11 text-right mt-2"><Username/></div>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item  nav-profile border-0">
              <Dropdown>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <i className="mdi mdi-account"></i>
                </Dropdown.Toggle>
                <Logout/>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

const Logout= () =>{
  const history = useHistory();
  const dispatch = useDispatch();
  return(
      <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
        <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-3" onClick={(evt) => {
          evt.preventDefault();
          dispatch({ type: LOGOUT  });
          history.push('/')
        }}>
          <Trans>Sign Out</Trans>
        </Dropdown.Item>
      </Dropdown.Menu>
  )
}

const Username = () => {
  let username = ""
  if (localStorage.getItem('profile')) {
    username = JSON.parse(localStorage.getItem('profile')).result.username;
  }
  return(
      <h4>welcome     {username}</h4>
  )
}

export default Navbar;
