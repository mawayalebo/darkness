import Nav from "./components/nav";
import Search from "./components/search"
import CurrentWeather from "./components/currentWeather";
import useFetch from "./hooks/useFetch";
import { useState } from 'react'


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
      <Nav/>
      {loading && <div><h1>Loading</h1></div> }
      {error && <div><h1>{error}</h1></div>}
      {currentData && <CurrentWeather currentData = { currentData }/>}
    </div>
   );
}
export default App;

