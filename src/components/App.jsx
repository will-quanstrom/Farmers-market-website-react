import React from 'react';
import Nav from './Nav';
import SeasonSideBar from './SeasonSideBar';
import MainSchedule from './MainSchedule';
import "./../styles.css";

function App(){
    return (
        <div>
            <Nav />
            <SeasonSideBar />
            <MainSchedule />
        </div>
    );
}

export default App;