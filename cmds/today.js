const getRawWeather = require("../utilities/getRawWeather");
const direct=require("../utilities/getLocation");
module.exports = async function(location) {
  if(location==undefined){
   location= await direct();

  }
  
  const fullWeather = await getRawWeather(location);
  // 5 days weather
  const TodaysWeather = fullWeather[0];
  const currentState = TodaysWeather["weather_state_name"];
  const temp = Math.ceil(TodaysWeather["the_temp"]);
  // template String syntax=> you can also use normal strings
  console.log(`Current conditions in ${location}
                  ${temp} ${currentState}
                        `);
};
