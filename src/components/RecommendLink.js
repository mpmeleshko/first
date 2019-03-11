import React from 'react';
import laravel from "../img/laravel.jpg";

class RecommendLink extends React.Component {
    render() {
        return (
            <div className="dashboard-recommend-items">
                <div className="post-avatar-container">
                    <img src={laravel} className="post-avatar" alt="Post avatar"/>
                </div>
                <div className="post-body">
                    <div className="post-title">
                        <span className="post-user-name">Learning Laravel</span> @learn...
                    </div>
                    <button className="follow-link">Follow</button>
                </div>
                <i className="fas fa-times"></i>
            </div>
        );
    }
}

export default RecommendLink;