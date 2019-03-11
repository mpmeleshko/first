import React from 'react';
import postava from "../img/oe.jpg";
import firstpost from "../img/post1.jpg";

class Post extends React.Component {
    render() {
        return(
            <div className="post">
                <div className="head-post">
                    <div className="post-avatar-container">
                        <img src={postava} className="post-avatar" alt="Post avatar"/>
                    </div>
                    <div className="post-body">
                        <div className="post-title">
                            <span className="post-user-name">Океан Ельзи</span> <i className="fas fa-check-circle"></i> @okeanelzy <span>&#183;</span> Feb 28
                            <span className="list-down"><i className="fas fa-chevron-down"></i></span>
                        </div>
                        <div className="post-content">
                            17.05, Київ, додатковий концерт "Океан Ельзи з оркестром"! Чекаємо)
                            <a href="#"> https://kasa.in.ua/okeanelzyzorkestrom-dodatkovyi … </a>
                        </div>
                        <div className="translate-text">
                            <i className="fas fa-globe-europe"></i> Translate Tweet
                        </div>
                        <div className="content-post-image">
                            <img src={firstpost} className="content-image-post" alt="Content image"/>
                        </div>
                        <div className="post-actions">
                            <a className="post-action-icon"><i className="far fa-comment"></i> 225</a>
                            <a className="post-action-icon"><i className="fas fa-retweet"></i> 120</a>
                            <a className="post-action-icon"><i className="far fa-heart"></i> 10000</a>
                            <a className="post-action-icon"><i className="far fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;