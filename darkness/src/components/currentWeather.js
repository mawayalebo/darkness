import {Carousel, Modal} from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";

const CurrentWeather = ({currentData}) => {
    const hours = currentData.hourly.slice(0,24).map(hour => {

      return  new Date((((hour.dt)*1000))).toLocaleString("en-US",{timeStyle:"short"});
    });
    const hourTemperature = currentData.hourly.map(hour=> hour.feels_like);
    const data = {
        labels:hours,
        fontColor:"rgb(255,255,255)",
        datasets:[{
            label:"Temperature in degrees celcius: ",
            data:hourTemperature,
            backgroundColor:"rgba(91,1,130,0.4)",
            fill:true,
            pointBackgroundColor:"rgba(255,255,255,1)",
            borderColor:"rgba(177,0,252,1)"

            }
        ]
    }
    const options = {
        title:{
            display:true,
            text:"Hourly Forecast",
            fontSize:40,
            fontColor: "white",
            fontFamily: "quicksand"
        },
        scales:{
            yAxes:{
                suggestedmin:0,
                suggestedmax:100
            }
        }
    }
    const legend = {
        display:false
    };
    const labelling = {
        display:false
    }
   console.log(currentData.hourly);
   var x = 0;
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
                                <p  className="col s6 white-text center low_high">Low <br/> {Math.round(currentData.daily[0].temp.min)}<sup>o</sup>C</p>
                                <p  className="col s6 white-text center low_high">High <br/> {Math.round(currentData.daily[0].temp.max)}<sup>o</sup>C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Line data={data} options={options} legend={legend} labelling={labelling}/>
            <Modal id="current_more_modal" className="modal transparent darken-4 accent-1 "  options={{ opacity:0.9}}>
                <div className="container">
                    <span className="white-text center" >{new Date(((currentData.current.dt)*1000)).toLocaleString("en-US", {weekday:"long"})}</span>;
                    <span className="blue-text center">{new Date(((currentData.current.dt)*1000)).toLocaleString("en-US", {dateStyle:"long"})}</span>
                    <hr/>
                    <div className="container">
                    <div className="row">
                        <div className="white-text col s4">
                            <p>Humidity</p>
                            <p>{currentData.current.humidity}%</p>
                        </div>
                        <div className="white-text col s4">
                            <p>Clouds</p>
                            <p>{currentData.current.clouds}%</p>
                        </div>
                        <div className="white-text col s4">
                            <p>Pressure</p>
                            <p>{currentData.current.pressure} hpa</p>
                        </div>
                        <p className="white-text">Wind speed: {currentData.current.wind_speed} m/sec</p>
                        <p className="white-text">Wind direction: {currentData.current.wind_deg}<sup>o</sup></p>
                        <div className="white-text col s6">
                            <p> sunrise :{new Date(((currentData.current.sunrise)*1000)).toLocaleString("en-US", {timeStyle:"short"})}</p>
                            <p> sunset :{new Date(((currentData.current.sunset )*1000)).toLocaleString("en-US", {timeStyle:"short"})}</p>
                        </div>
                    </div>
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
                            <a className="carousel-item " id={x++} key={day.dt}>
                                <div className="card transparent">
                                    <div className="card-content">
                                        <div className="card-title white-text">
                                            {
                                                x == 1?(
                                                    "Today"
                                                ):(
                                                    new Date(((day.dt)*1000)).toLocaleString("en-US", {weekday:"long"})
                                                )
                                            }
                                        </div>
                                        <p>{new Date(((day.dt)*1000)).toLocaleString("en-US", {dateStyle:"long"})}</p>
                                        <div>
                                        <img className="responsive-img col s6" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                                            <div className="row">
                                                <h5 className="white-text col s6">{Math.round(day.temp.day)}<sup>o</sup>C</h5>
                                                <p  className="orange-text col s6">{day.weather[0].description}</p>
                                                {
                                                    day.weather[0].description.includes("rain")?(
                                                        <p>{Math.round(day.rain )}mm</p>
                                                    ):(
                                                        <span></span>
                                                    )
                                                }
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