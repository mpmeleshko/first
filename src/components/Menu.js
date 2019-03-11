import React from 'react';
import logo from '../img/logo.png';
import avatar from '../img/avatar.jpg'

class Menu extends React.Component {
    render () {
        return (
            <div className="global-nav-menu">
                <div className="container-nav-menu">
                    <div className="left-menu-container menu-element">
                        <ul id="nav-list">
                            <li className="nav-link"><i className="fas fa-home"></i> Home</li>
                            <li className="nav-link"><i className="far fa-bell"></i> Notification</li>
                            <li className="nav-link"><i className="far fa-envelope"></i> Messages</li>
                        </ul>
                    </div>
                    <div className="logo-container menu-element">
                        <img src={logo} id="logo" alt="Logo"/>
                    </div>
                    <div className="right-menu-container menu-element">
                        <div className="right-menu-search menu-right-elements">
                            <input className="main-search" placeholder="Search Twitter"/>
                        </div>
                        {/*<button><i className="fas fa-search"></i></button>*/}
                        <div className="right-menu-avatar menu-right-elements">
                            <img src={avatar} className="avatar-mini" alt="Avatar"/>
                        </div>
                        <div className="right-menu-tweet menu-right-elements">
                            <button className="button-search">Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;