let k = new Date();

console.log(k)
let day = k.getDay();
let hour = k.getHours();
let minutes = k.getMinutes();
let timezone = k.getTimezoneOffset();
console.log(day)
let dayString;
switch (day){
    case 1:
        dayString = 'Monday'
        break;
    case 2:
        dayString = 'Tuesday'
        break;
    case 3:
        dayString = 'Thursday'
        break;
    case 4:
        dayString = 'Wednesday'
        break;
    case 5:
        dayString = 'Friday'
        break;
    case 6:
        dayString = 'Saturday'
        break;
    case 7:
        dayString = 'Sunday'
        break;
    default:
        dayString = day;
        break;

}

if (minutes < 10) {
    minutes = `0${minutes}`

}


document.querySelector('.time').innerHTML = `${dayString} ${hour}:${minutes}`