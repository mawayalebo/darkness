
import Currently from './currently';
 const keys = () => {
     const locationIQ = { apiToken:"pk.557f07baf962c4206149498f4a2636e7"};
     return ( 
        <div>
            <Currently locationIQ={locationIQ}/>
        </div>
      )
 }
 export default keys;