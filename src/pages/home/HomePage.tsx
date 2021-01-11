import React, {useCallback} from "react";
import Header from "./components/Header";
import {Cities} from '../../constants/cities';

const HomePage : React.FC = () => {

    const rerenderCities = useCallback(() => {
      return [...Array(Cities.len).keys()].map(el => <option value={Cities[el]}>{Cities[el]}</option>);
    },[]);

    return (
        <div className='home'>
            <Header />
            <div className='home__poster'>
                <img src='images/home.jpg' alt='home poster here'/>
                <button type="button" className="btn btn-dark btn-lg">Let's started</button>
            </div>
            <div className='home__content'>
                <div className='home__title'>
                    <h1>Bus Schedule</h1> - <span>an easy and quick way to find your schedule</span>
                </div>
                <div className='home__tools'>
                    <select className="form-control">
                        <option value="" disabled selected>Select your city</option>
                        {rerenderCities()}
                    </select>
                    <button type="button" className="btn btn-dark">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;