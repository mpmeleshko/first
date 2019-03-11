import React from 'react';
import Menu from './Menu';
import ProfileCard from './ProfileCard';
import Content from './Content';
import Dashboard from './Dashboard';

class App extends React.Component {
    render () {
        return (
            <div>
                <Menu/>
                <div className="wrapper">
                    <ProfileCard/>
                    <Content/>
                    <Dashboard/>
                </div>
            </div>
        );
    }
}

export default App;