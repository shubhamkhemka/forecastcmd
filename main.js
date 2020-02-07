// to import something
const help = require("./cmds/help");
const today = require("./cmds/today");
const forecast=require("./cmds/forecast");
// const direct1=require("./utilities/getRawWeather")
const minimist=require("minimist");

const input = process.argv.slice(2);
// const parseInput=minimist(input);
let cmd;
let location;
// if(parseInput==undefined){


//  location =parseInput.l||parseInput.location||input[1]=="location"?input[2]:undefined;
//  cmd = parseInput["_"][0];
// }
// else
// {
   location=input[1];
   cmd = input[0];
// }


if (cmd == "today" ) 
{
  today(location);
}else if (cmd == "forecast") {
  forecast(location);


} else if ((cmd == "help")) {
  help();

} else if (cmd == "version") {
} else {
  console.log("Wrong Command");
}
