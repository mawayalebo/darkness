import "./css/hourlySkeleton.css";
import { Skeleton } from "@material-ui/lab";

const HourlySkeleton = () => {
    return ( 
        <div className="hourly_skeleton container">
            <Skeleton variant="rect" animation="wave" className="hourly_span"/>
        </div>
     );
}
 
export default HourlySkeleton;