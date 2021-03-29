import { useState } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import "../css/currently.css";
import MoreCurrently from "./moreCurrently";

const Currently = ({currentData, coordinates}) => {
     const [ cityName, setCityName ] = useState("London");
    fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.557f07baf962c4206149498f4a2636e7&lat=${coordinates.lat}&lon=${coordinates.lon}&format=json`)
    .then(results => results.json())
    .then(data => {
        setCityName(data.address.city);
    })
    .catch(err=> err.message);
    return (
        <div className="currently">
            <section>
                <div className="container">
                    <div className="hide-on-small-only">
                        <div className="city_name_box ">
                            <span className="white-text">{cityName}</span>
                            <i className="material-icons white-text tiny">location_on</i>
                        </div>
                        <div className="current_temp_box">
                            <div className="current_weather_box">
                                <div className="feels_like_box center">
                                    <p className="blue-text now">Now</p>
                                    <p className="white-text feels_like">{Math.round(currentData.current.feels_like)}<sup>o</sup>C</p>
                                    <div className="low_high_box center">
                                        <p  className="white-text">Low <br/> {Math.round(currentData.daily[0].temp.min)}<sup>o</sup>C</p>
                                        <p  className="white-text">High <br/> {Math.round(currentData.daily[0].temp.max)}<sup>o</sup>C</p>
                                    </div>
                                </div>
                                <div className="weather_icon_box center">
                                    <img className="responsive-img" src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@4x.png`} alt=""/>
                                    <div className="description_box center">
                                        <p className="orange-text"> - {currentData.current.weather[0].description} - </p>
                                    </div>
                                </div>
                                <div data-target="current_more_modal" className="more_info_box center modal-trigger btn waves-effect transparent waves-ripple">
                                    <span className="center white-text">More info</span> <i className="material-icons white-text">navigate_next</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hide-on-med-and-up">
                        <div className="city_name_box_small center">
                            <i className="material-icons white-text tiny">location_on</i>
                            <span className="white-text">{cityName}</span>
                        </div>
                        <div className="current_temp_box_small">
                            <div className="current_weather_box_small">
                                <div className="feels_like_box_small center">
                                    <p className="purple-text text-lighten-3 now_small">Now</p>
                                    <p className="white-text feels_like">{Math.round(currentData.current.feels_like)}<sup>o</sup>C</p>
                                    <div className="low_high_box_small center">
                                        <p  className="white-text">Low <br/> {Math.round(currentData.daily[0].temp.min)}<sup>o</sup>C</p>
                                        <p  className="white-text">High <br/> {Math.round(currentData.daily[0].temp.max)}<sup>o</sup>C</p>
                                    </div>
                                </div>
                                <div className="weather_icon_box_small center">
                                    <img className="responsive-img center" src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@4x.png`} alt=""/>
                                    <div className="description_box_small ">
                                        <span className="orange-text">{currentData.current.weather[0].description}</span>
                                    </div>
                                </div>
                                <div data-target="current_more_modal" className="more_info_box_small center modal-trigger btn waves-effect transparent waves-ripple">
                                    <span className="center white-text">More info</span> <i className="material-icons white-text">navigate_next</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MoreCurrently currentData={currentData}/>
            </section>
        </div>
     );
}

export default Currently;