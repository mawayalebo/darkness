import Nav from "./components/nav";
import CurrentWeather from "./components/currentWeather";
import useFetch from "./hooks/useFetch";
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import CurrentWeatherSkeleton from "./skeletons/currentWeatherSkeleton";


const App = () => {
  const [lon , setLon ] = useState(null);
  const [lat , setLat ] = useState(null);
  navigator.geolocation.getCurrentPosition(position =>{
    setLon(position.coords.longitude);
    setLat(position.coords.latitude);
  });

   if(!lon && !lat){
    setLat(35);
    setLon(139);
   }

  const { currentData, loading, error } = useFetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=3d0806c7179c1c27749d24acb91cedf0`);

  return (
    <div className="App">
      <Router>
        <Nav/>
        {loading && <CurrentWeatherSkeleton/> }
        {error && <div><h1>{error}</h1></div>}
        {currentData && <CurrentWeather currentData = { currentData } coordinates={{lon, lat}}/>}
      </Router>
    </div>
   );
}
export default App;

