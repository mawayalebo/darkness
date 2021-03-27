
import Currently from "./currently";
import Hourly from "./hourly";
import Daily from "./daily";
import "../css/currentWeather.css";


const CurrentWeather = ({currentData, coordinates}) => {
    return (
        <div className="current_weather">
            <Hourly currentData={currentData}/>
            <div className="second_content">
                <Currently currentData={currentData} coordinates={coordinates}/>
                <Daily currentData={currentData}/>
            </div>
        </div>
     );
}

export default CurrentWeather;