import {Carousel, Modal} from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import Currently from "./currently";
import Hourly from "./hourly";
import Daily from "./daily";


const CurrentWeather = ({currentData, coordinates}) => {
    return (
        <div className="current_weather">
            <Currently currentData={currentData} coordinates={coordinates}/>
            <Hourly currentData={currentData}/>
            <Daily currentData={currentData}/>
        </div>
     );
}

export default CurrentWeather;