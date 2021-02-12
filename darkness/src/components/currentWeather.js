import {Carousel, Modal} from "react-materialize";

import thermometer from "./wi-thermometer.svg"

const CurrentWeather = ({currentData}) => {
    console.log(currentData);
    return (
        <div className="container">
            <div className="heading row ">
                <h4 className="heading-text white-text col s12">Currently</h4>
                <span className="white-text col s12">   {currentData.timezone}</span>
            </div>
            <div className="container ">
                <div data-target="current_more_modal" className="z-depth-4 transparent currently-box modal-trigger">
                    <div className="row">
                        <span className="col s8   center white-text temp-deg offset-s2 right ">{Math.round(currentData.current.feels_like)}<sup>o</sup>C</span>
                        <div className="transparent z-depth-4 description-box container">
                         <img className="col s12 center weather-icon" src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@4x.png`} alt=""/>
                            <p className="orange-text current-description center col s12"> - {currentData.current.weather[0].description} - </p>
                            <div className="low_high_box">
                                <p  className="col s6 white-text center low_high">Low <br/> {currentData.daily[0].temp.min}<sup>o</sup>C</p>
                                <p  className="col s6 white-text center low_high">High <br/> { currentData.daily[0].temp.max}<sup>o</sup>C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal id="current_more_modal" className="modal transparent darken-4 accent-1 " bottomSheet options={{ opacity:0.9}}>
                <div className="container">
                    <h4 className="white-text center" >{new Date(((currentData.current.dt)*1000)).toLocaleString("en-US", {weekday:"long"})}</h4>;
                    <p className="blue-text center">{new Date(((currentData.current.dt)*1000)).toLocaleString("en-US", {dateStyle:"long"})}</p>
                    <hr/>
                    <div className="container">
                        <p className="white-text">Humidity: {currentData.current.humidity}%</p>
                        <p className="white-text">Clouds: {currentData.current.clouds}%</p>
                        <p className="white-text">Atmospheric Pressure: {currentData.current.pressure} hpa</p>
                        <p className="white-text">Wind speed: {currentData.current.wind_speed} m/sec</p>
                        <p className="white-text">Wind direction: {currentData.current.wind_deg}<sup>o</sup></p>
                    </div>
                </div>
            </Modal>
            <div className="row">
                <h4 className="white-text col s12">Daily</h4>
            </div>
            <div className="">
                <Carousel className="daily-weather">
                    {
                        currentData.daily.map(day=>(
                            <a className="carousel-item " key={day.dt}>
                                <div className="card transparent">
                                    <div className="card-content">
                                        <div className="card-title white-text">
                                            {new Date(((day.dt)*1000)).toLocaleString("en-US", {weekday:"long"})}
                                        </div>
                                        <p>{new Date(((day.dt)*1000)).toLocaleString("en-US", {dateStyle:"long"})}</p>
                                        <div>
                                        <img className="responsive-img col s6" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                                            <div className="row">
                                                <h5 className="white-text col s6">{Math.round(day.temp.day)}<sup>o</sup>C</h5>
                                                <p  className="orange-text col s6">{day.weather[0].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    }
                </Carousel>
            </div>
        </div>
     );
}

export default CurrentWeather;