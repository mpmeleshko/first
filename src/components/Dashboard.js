import React, {Fragment} from 'react';
import RecommendLink from './RecommendLink';

class Dashboard extends React.Component {
    render () {
        return (
            <div className="dashboard-card">
                <div className="profile-recommend">
                    <div id="recommend-title">
                        Recommend <span>&#183;</span> <a href="#">Change</a> <span>&#183;</span> <a href="#">Show more</a>
                    </div>
                    <RecommendLink/>
                    <RecommendLink/>
                    <RecommendLink/>
                </div>
            </div>
        );
    }
}

export default Dashboard;