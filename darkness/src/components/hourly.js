import "../css/hourly.css";
import { Timeline, TimelineItem, TimelineConnector, TimelineSeparator, TimelineDot, TimelineOppositeContent, TimelineContent} from "@material-ui/lab";

const Hourly = ({currentData}) => {
    
    return (
        <>
            <Timeline align="alternate">
                {
                    currentData.hourly.slice(9,19).map(item =>(
                        <TimelineItem key={item.dt}>
                            <TimelineOppositeContent>
                                <p className="grey-text">{new Date(item.dt * 1000).toLocaleString("en-US",{timeStyle:"short"})}</p>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined"/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <p className="grey-text">{Math.round(item.feels_like)}<sup>o</sup>C</p>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </>
     );
}

export default Hourly;