import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          </div>
        <ul className="nav">

          <li className={ this.isPathActive('/home') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/home">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title"><Trans>Home</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/add') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/add">
              <i className=" mdi mdi-plus-circle-outline menu-icon"></i>
              <span className="menu-title"><Trans>Add Project</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/newProject') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/newProject">
              <i className="mdi mdi-playlist-plus menu-icon"></i>
              <span className="menu-title"><Trans>New Projects</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/ongoing') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/ongoing">
              <i className="mdi mdi-playlist-play menu-icon"></i>
              <span className="menu-title"><Trans>Ongoing Projects</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/complete') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/complete">
            <i className="mdi mdi-playlist-check menu-icon"></i>
            <span className="menu-title"><Trans>Completed Projects</Trans></span>
          </Link>
        </li>


          <li className={ this.isPathActive('/map') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/map">
              <i className="mdi mdi-map-marker menu-icon"></i>
              <span className="menu-title"><Trans>Map Page</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/Analysis') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/Analysis">
              <i className="mdi mdi-chart-bar menu-icon"></i>
              <span className="menu-title"><Trans>Analysis</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/estimation') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/estimation">
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title"><Trans>Project estimation</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/Fieldman') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/Fieldman">
              <i className="mdi mdi-human-male menu-icon"></i>
              <span className="menu-title"><Trans>Fieldmen</Trans></span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);