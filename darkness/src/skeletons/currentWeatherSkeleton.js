import CurrentlySkeleton from "./currentlySkeleton"
import HourlySkeleton from "./hourlySkeleton";
import DailySkeleton from "./dailySkeleton";
import "./css/currentWeatherSkeleton.css";
const CurrentWeatherSkeleton = () => {
    return ( 
        <div className="current_weather_skeleton">
            <div className="container_wrapper center">
                <div className="first_group center">
                    <HourlySkeleton/>
                </div>
                <div className="second_group center">
                    <CurrentlySkeleton/>
                    <DailySkeleton/>
                </div>
            </div>
        </div>
     );
}
export default CurrentWeatherSkeleton;