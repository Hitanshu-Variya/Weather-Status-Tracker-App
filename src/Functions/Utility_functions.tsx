import WeatherJSON from "../Interfaces/WeatherJSON";
import API_KEY from "../API_KEY";

const GetWeatherStats = async (Place:string | null) => {
    if(Place === null)
        return null;
  
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${Place}&units=metric&appid=${API_KEY}`;
    const response = await fetch(URL);
    const JSON_response = response.json();
    return JSON_response;
}
  
const HandleKeyUP = (event:React.KeyboardEvent<HTMLInputElement>, setDisplayPlace: (PlaceName: string) => void, PlaceName:string) => {
    if(event.key === "Enter" && PlaceName !== "") {
        setDisplayPlace(PlaceName); 
        GetWeatherStats(PlaceName)
    }
}

const ShowWeatherStats = (WeatherData:WeatherJSON) => {
    return (
        <div className="flex flex-col h-44 font-bold text-slate-100">
            <hr className="h-px bg-slate-500 border-0 "/>
            <p className="flex-1 p-2 m-0 relative">Temperature <span className="absolute right-2">{WeatherData.main.temp} °C</span></p> <hr className="h-px bg-slate-500 border-0 "/>
            <p className="flex-1 p-2 m-0 relative">Pressure <span className="absolute right-2">{WeatherData.main.pressure} Pascal</span></p> <hr className="h-px bg-slate-500 border-0 "/>
            <p className="flex-1 p-2 m-0 relative">Humidity <span className="absolute right-2">{WeatherData.main.humidity} %</span></p> <hr className="h-px bg-slate-500 border-0 "/>
            <p className="flex-1 p-2 m-0 relative">Weather <span className="absolute right-2">{WeatherData.weather[0].description}</span></p> <hr className="h-px bg-slate-500 border-0 "/>
        </div>
    )
}

const HandleNULLWeatherData = () => {
    return (<div className="text-center text-white font-semibold text-xl"> No Such Place exists! Check Again!</div>);
}

const GetCurrentTime = () => {
    const date = new Date();
    var seconds = date.getSeconds().toString();
    var minutes = date.getMinutes().toString();
    var Hours = date.getHours();
    var meridian = "";

    if(seconds.length === 1)
        seconds = "0" + seconds;

    if(minutes.length === 1)
        minutes = "0" + minutes;

    if(Hours >= 12) {
        Hours -= 12;
        meridian = "PM";
    }
    else {
        meridian = "AM";
    }

    var new_Hours = Hours.toString();
    if(new_Hours.length === 1)
        new_Hours = "0" + new_Hours;

    return (new_Hours + ":" + minutes + ":" + seconds + " " + meridian);
}

const GetCurrentDayAndDate = () => {
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date();
    const Day = Days[date.getDay()];

    const month = Months[date.getMonth()];
    const TodaysDate = date.getDate() + " " + month + " " + date.getFullYear();

    return [Day, TodaysDate];
}

export {GetWeatherStats, HandleKeyUP, ShowWeatherStats, HandleNULLWeatherData, GetCurrentTime, GetCurrentDayAndDate};