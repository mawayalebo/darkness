import { Modal } from "react-materialize";
import "../css/moreCurrently.css";
import clouds from "../assets/wi-cloud.svg";
import humidity from "../assets/wi-humidity.svg";
import pressure from "../assets/wi-barometer.svg";
const MoreCurrently = ({currentData}) => {
    return (
            <Modal id="current_more_modal" className="modal transparent darken-4 accent-1 z-depth-2 "  options={{ opacity:0.9}}>
                <div className="container">
                    <div className="heading_dates">
                        <span className="white-text  weekday_heading" >{new Date(((currentData.current.dt)*1000)).toLocaleString("en-US", {weekday:"long"})}</span>;
                        <span className="orange-text ">{new Date(((currentData.current.dt)*1000)).toLocaleString("en-US", {dateStyle:"long"})}</span>
                    </div>
                    <hr/>
                    <div className="container">
                    <div className="row">
                        <div className="white-text col s4 center">
                            <img src={humidity} alt="humidity" className="responsive-img"/>
                            <p>{currentData.current.humidity}%</p>
                        </div>
                        <div className="white-text col s4 center">
                            <img src={clouds} alt="clouds" className="responsive-img"/>
                            <p>{currentData.current.clouds}%</p>
                        </div>
                        <div className="white-text col s4 center">
                            <img src={pressure} alt="pressure" className="responsive-img"/>
                            <p>{currentData.current.pressure} hpa</p>
                        </div>
                        <div className="wind col s6 center">
                            <p className="purple-text text-lighten-3">Wind Speed</p>
                            <p className="white-text ">{currentData.current.wind_speed}m/s</p>
                        </div>
                        <div className="wind col s6 center">
                        <p className="purple-text text-lighten-3">Wind Deg</p>
                            <p className="white-text ">{currentData.current.wind_deg} <sup>o</sup></p>
                        </div>
                    </div>
                    </div>
                </div>
            </Modal>
     );
}
export default MoreCurrently;