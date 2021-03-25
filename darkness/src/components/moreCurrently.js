import { Modal } from "react-materialize";
const MoreCurrently = ({currentData}) => {
    return ( 
        <div className="more-currently">
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
        </div>
     );
}
 
export default MoreCurrently;