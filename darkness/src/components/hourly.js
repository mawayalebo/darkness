import { Line } from "react-chartjs-2";

const Hourly = ({currentData}) => {
    const hours = currentData.hourly.slice(0,24).map(hour => {

        return  new Date((((hour.dt)*1000))).toLocaleString("en-US",{timeStyle:"short"});
      });
      const hourTemperature = currentData.hourly.slice(0,24).map(hour=> hour.feels_like);
      const data = {
          labels:hours,
          fontColor:"rgb(255,255,255)",
          datasets:[{
              label:"Temperature in degrees celcius: ",
              data:hourTemperature,
              backgroundColor:"rgba(91,1,130,0.4)",
              fill:true,
              pointBackgroundColor:"rgba(255,255,255,1)",
              borderColor:"rgba(177,0,252,1)"
  
              }
          ]
      }
      const options = {
          responsive:false,
          legend:{
              display:false
          },
          title:{
              display:true,
              text:"Hourly Forecast",
              fontSize:40,
              fontColor: "white",
              fontFamily: "quicksand"
          },
          scales:{
              yAxes:[{
                  ticks:{ 
                      suggestedmax:100,
                      beginAtZero:false
                  },
                  gridLines:{
                      display:false
                  }
              }],
              xAxes:[{
                  gridLines:{
                      display:false
                  }
              }]
          }
      }
      const legend = {
          display:false
      };
      const labelling = {
          display:false
      }
    return ( 
        <div className="hourly">
            <section>
                <Line data={data} options={options} legend={legend} labelling={labelling}/>
            </section>
        </div>
     );
}
 
export default Hourly;