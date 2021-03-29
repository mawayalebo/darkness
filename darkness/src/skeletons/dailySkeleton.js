import { Carousel } from "react-materialize";
import { Skeleton } from "@material-ui/lab";
import "./css/dailySkeleton.css";
const DailySkeleton = () => {
    return ( 
        <Carousel>
            <a href="#0" >
                <Skeleton variant="rect" animation="wave" className="daily_span"/>
            </a>
            <a href="#0">
                <Skeleton variant="rect" animation="wave" className="daily_span"/>
            </a>
            <a href="#0">
                <Skeleton variant="rect" animation="wave" className="daily_span"/>
            </a>
            <a href="#0">
                <Skeleton variant="rect" animation="wave" className="daily_span"/>
            </a>
            <a href="#0">
                <Skeleton variant="rect" animation="wave" className="daily_span"/>
            </a>
        </Carousel>
     );
}
export default DailySkeleton;