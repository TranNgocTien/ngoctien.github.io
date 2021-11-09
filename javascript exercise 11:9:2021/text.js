"use strict";
const date= new Date();
const dateList=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const day=date.getDay();
let hour=date.getHours();
const min=date.getMinutes();
const sec=date.getSeconds();
let prepand=hour>12?'PM':'AM'
hour=hour>12?hour-12:hour;
if(hour===12&& min===0 && sec===0){
    prepand='noon';
}
console.log(`Today is: ${dateList[day]}`);
console.log(`Current time is: ${hour}${prepand}:${min}:${sec}`);