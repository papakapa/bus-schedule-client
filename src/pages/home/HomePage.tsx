import React from "react";
import Header from "./components/Header";

const HomePage : React.FC = () => {
    return (
        <div className='home'>
            <Header />
            <div className='home__poster'>
                <img src='images/home.jpg' alt='home poster here'/>
                <button type="button" className="btn btn-dark btn-lg">Let's started</button>
            </div>
            <div className='home__content'>
                <div className='home__title'>
                    Bus Schedule
                </div>
                <div className='home__tools'>
                    Schedule Tools
                </div>
            </div>
        </div>
    );
};

export default HomePage;