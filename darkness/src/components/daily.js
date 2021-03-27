import {Carousel} from "react-materialize";
const Daily = ({currentData}) => {

     var x = 0;
    return ( 
        <div className="daily">
            <section>
            <div className="row">
                <h4 data-target="hourly_sidenav" className="white-text col s12 sidenav-trigger">Daily</h4>
            </div>
            <div className="">
                <Carousel className="daily-weather">
                    {
                        currentData.daily.map(day=>(
                            <a className="carousel-item " id={x++} key={day.dt}>
                                <div className="card transparent z-depth-2">
                                    <div className="card-content">
                                        <div className="card-title white-text">
                                            {
                                                x === 1?(
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
            </section>
        </div>
     );
}
 
export default Daily;