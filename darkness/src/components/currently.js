import { useState } from "react";
import { SideNav, SideNavItem } from "react-materialize";
import "../css/currently.css";

const Currently = ({currentData, coordinates}) => {
     console.log(coordinates.lon);
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
                    <div className="city_name_box ">
                        <span data-target="hourly_sidenav" className="white-text col s12 sidenav-trigger">{cityName}</span>
                        <i class="material-icons white-text tiny">location_on</i>
                    </div>
                    <div data-target="current_more_modal" className="current_temp_box">
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
                            <div className="more_info_box center">
                                <span className="center white-text">More info</span> <i className="material-icons white-text">navigate_next</i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Currently;