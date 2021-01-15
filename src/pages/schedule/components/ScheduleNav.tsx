import React from "react";
import {NavLink} from "react-router-dom";

const ScheduleNav : React.FC = () => {
 return (
     <nav className='schedule__nav '>
         <div className="card text-center border-dark mb-3">
             <img src="images/bus.png"  alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">Bus number</h5>
                 <p className="card-text">Check schedule by bus number</p>
                 <NavLink to="/schedule/bus-number" className="btn btn-dark">Check</NavLink>
             </div>
         </div>
         <div className="card text-center border-dark mb-3">
             <img src="images/bus-stop.png"  alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">Bus stop name</h5>
                 <p className="card-text">Check schedule of bus stop</p>
                 <NavLink to="/schedule/bus-stop" className="btn btn-dark">Check</NavLink>
             </div>
         </div>
     </nav>
 );
};

export default ScheduleNav;
