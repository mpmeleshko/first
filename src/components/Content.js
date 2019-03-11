import React from 'react';
import avatar from "../img/avatar.jpg";
import Post from './Post';

class Content extends React.Component {
    render () {
        return (
            <div className="content-card">
                <div className="search-content">
                    <div className="content-image">
                        <img src={avatar} className="avatar-mini" alt="Avatar"/>
                    </div>
                    <div className="content-input">
                        <input className="input-search-content" placeholder="What's happening?"/>
                        {/*<i className="far fa-image"></i>*/}
                    </div>
                </div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
    }
}

export default Content;