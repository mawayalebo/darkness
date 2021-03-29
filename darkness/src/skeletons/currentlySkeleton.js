import { Skeleton } from "@material-ui/lab";
import "./css/currentlySkeleton.css";
const CurrentlySkeleton = () => {
    return ( 
        <div className="currently_skeleton">
            <div className="container">
                <Skeleton variant="rect" animation="wave" className="current_city_span center"/>
                <Skeleton variant="rect" animation="wave" className="currently_span"/>
            </div>
        </div>
     );
}
 
export default CurrentlySkeleton;