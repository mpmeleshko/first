import React from 'react';
import avatar from '../img/avatar.jpg';

class ProfileCard extends React.Component {
    render () {
        return (
            <div className="profile-info">
                <div className="profile-card">
                    <div className="profile-card-top">
                    </div>
                    <div className="profile-avatar">
                        <img src={avatar} className="avatar-image" alt="Avatar"/>
                    </div>
                    <div className="profile-card-bottom">
                        <h2 className="profile-name">Marina</h2>
                        @marina1602
                        <ul className="profile-detail">
                            <li>
                                Tweets <br/> <span className="account-detail">65</span>
                            </li>
                            <li>
                                Follows <br/> <span className="account-detail">225</span>
                            </li>
                            <li>
                                Followers <br/> <span className="account-detail">252</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile-recommend">
                    <div id="recommend-title">
                        Trends for you <span>&#183;</span> <a href="#">Change</a>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">Poroshenko</a>
                        <div className="recommend-items-detail">6,741 Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">Putin</a>
                        <div className="recommend-items-detail">107K Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">Pakistan</a>
                        <div className="recommend-items-detail">1.59M Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">Ukraine</a>
                        <div className="recommend-items-detail">32.7K Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">#WelcomeBackAbhinandan</a>
                        <div className="recommend-items-detail">62.8K Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">#крым</a>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">Russia</a>
                        <div className="recommend-items-detail">273K Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">#利用したことある新幹線駅晒せ</a>
                        <div className="recommend-items-detail">9,405 Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">#TrumpFail</a>
                        <div className="recommend-items-detail">15.6K Tweets</div>
                    </div>
                    <div className="profile-recommend-items">
                        <a href="#" className="nav-link-a">Imran Khan</a>
                        <div className="recommend-items-detail">217K Tweets</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;