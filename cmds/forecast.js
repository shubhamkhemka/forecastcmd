const getRawWeather = require("../utilities/getRawWeather");
const direct = require("../utilities/getLocation");
module.exports = async function(location) {
  if(location==undefined){
    location= await direct();
 
   }
  const fullWeather = await getRawWeather(location);
  // 5 days weather
  const Weather = fullWeather;
 const length=fullWeather.length;

//   console.log(Weather)
console.log( `${location}`);
  for(let i=0;i<length;i++){
  const currentState = Weather[i]["weather_state_name"];
  const maxtemp = Math.ceil(Weather[i]["max_temp"]);
  const mintemp = Math.ceil(Weather[i]["min_temp"]);
  const date =(Weather[i]["applicable_date"])
  // template String syntax=> you can also use normal strings
  console.log(`

  
  ${date}   - |  low:   ${mintemp}°     |  high:  ${maxtemp}°    | ${currentState}
                        `);
// console.table(Weather[i]);

}};
