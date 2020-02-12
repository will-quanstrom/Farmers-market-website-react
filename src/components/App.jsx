import React from 'react';
import Nav from './Nav';
import SeasonSideBar from './SeasonSideBar';
import MainSchedule from './MainSchedule';
import "./../styles.css";

function App(){
    return (
        <div>
            <Nav />
            <div class="two-columns">
                <SeasonSideBar />
                <MainSchedule />
            </div>
        </div>
    );
}

export default App;