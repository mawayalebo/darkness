import { Card , Carousel , CarouselItem} from "react-materialize";

const CurrentWeather = ({currentData}) => {
    const daily = currentData.daily;
    daily.forEach((day)=>{
        console.log(day);
    });
    return (
        <div className="container">
        <div className="heading black">
            <h4 class="heading-text white-text col s12">Current Weather</h4>
        </div>
            <span className="white-text">{currentData.timezone}</span>

            <h4>Daily</h4>
            <div className="container">
                <Carousel className="">
                    {
                        currentData.daily.map(day=>(
                            <a className="carousel-item " key={day.dt}>
                                <div className="card transparent">
                                    <div className="card-content">
                                        <div className="card-title white-text">
                                            {new Date(((day.dt)*1000)).toLocaleString("en-US", {weekday:"long"})}
                                        </div>
                                        <p>{new Date(((day.dt)*1000)).toLocaleString("en-US", {dateStyle:"long"})}</p>
                                        <div><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/></div>
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