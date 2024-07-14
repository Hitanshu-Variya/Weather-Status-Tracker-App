import { useEffect, useState } from 'react'
import WeatherJSON from './Interfaces/WeatherJSON';
import {GetWeatherStats, HandleKeyUP, ShowWeatherStats, HandleNULLWeatherData, GetCurrentTime, GetCurrentDayAndDate} from './Functions/Utility_functions'

function App() {
  const [PlaceName, setPlaceName] = useState<string>("Surat");
  const [DisplayPlace, setDisplayPlace] = useState<string>("Surat");
  const [WeatherData, setWeatherData] = useState<WeatherJSON | null>(null);
  const [WeatherImage, setWeatherImage] = useState<string | undefined>(undefined);
  const [WeatherIcon, setWeatherIcon] = useState<string>("/assets/day-cloud-rain-icon.svg");
  const [CurrentTime, setCurrentTime] = useState<string>("");
  const [CurrentDay, setCurrentDay] = useState<string>(GetCurrentDayAndDate()[0]);
  const [CurrentDate, setCurrentDate] = useState<string>(GetCurrentDayAndDate()[1]);

  useEffect(() => {
    const timer = setInterval(() => {setCurrentTime(GetCurrentTime())}, 1000);
    
    return () => {clearInterval(timer)};
  }, []);

  useEffect(() => {
    const [Day, TodaysDate] = GetCurrentDayAndDate();
    const timer = setInterval(() => {setCurrentDay(Day); setCurrentDate(TodaysDate)}, 86400000);

    return () => {clearInterval(timer)};
  }, []);

  useEffect(() => {
    if(DisplayPlace) {
        GetWeatherStats(DisplayPlace).then(data => {
        if(data.cod !== "404") {
          setWeatherData(data);
        }
        else {
          setWeatherData(null);
        }
      }).catch(err => {
        console.log(err);
      });
    }
  }, [DisplayPlace]);

  useEffect(() => {
    if(WeatherData) {
      const WeatherID = WeatherData.weather[0].id;
      
      if(200 <= WeatherID && WeatherID <= 232) 
        setWeatherImage("/assets/Thunderstorm.jpg");
      else if(300 <= WeatherID && WeatherID <= 321) 
        setWeatherImage("/assets/Drizzle.jpg");
      else if(500 <= WeatherID && WeatherID <= 531) 
        setWeatherImage("/assets/Rain.jpg");
      else if(600 <= WeatherID && WeatherID <= 622) 
        setWeatherImage("/assets/Snow.jpg");
      else if(701 <= WeatherID && WeatherID <= 741) 
        setWeatherImage("/assets/Mist.jpg");
      else if(751 <= WeatherID && WeatherID <= 781) 
        setWeatherImage("/assets/Tornado.jpg");
      else if(800 <= WeatherID && WeatherID <= 804) 
        setWeatherImage("/assets/Clear sky.jpg");

      setWeatherIcon("/assets/day-cloud-rain-icon.svg");
    }
    else {
      setWeatherIcon("/assets/alert-icon.svg");
    }
  }, [WeatherData]);

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-slate-800'> 
        <div className='w-11/12 md:w-5/6 lg:w-4/6 h-max border-2 rounded-3xl overflow-hidden relative'>
          <img className='absolute inset-0 w-full h-full object-cover' src={WeatherImage} alt="Weather_img"/>

          <div className='relative grid h-full grid-cols-1 md:grid-cols-10'>
            <div className='hidden sm:hidden md:block md:col-span-6'>
              <div className='absolute bottom-5 left-5 p-1 text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-transparent rounded-2xl'> 
                <div className='text-6xl font-bold'>{CurrentTime} </div>
                <div className='text-2xl pl-12'>{CurrentDay}, {CurrentDate}</div>
              </div> 
            </div>  

            <div className='md:col-span-4 flex flex-col-reverse items-center justify-center h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-transparent rounded-3xl overflow-hidden'>
              <div className='w-5/6 mb-10'>
                {WeatherData ? ShowWeatherStats(WeatherData) : HandleNULLWeatherData()} 
              </div>
              <div className='text-white mb-5 mt-5 text-4xl font-bold uppercase'> {DisplayPlace} </div>

              <input className='w-2/4 bg-slate-600 text-white text-center border border-transparent text-sm rounded-lg focus:outline-none block p-2' 
                placeholder='Enter Place'
                onChange={(event) => {setPlaceName(event.target.value)}} 
                onKeyUp={(event) => HandleKeyUP(event, setDisplayPlace, PlaceName)} />  

              <hr className='w-11/12 h-px m-5 bg-slate-500 border-0'/>
              <p className="text-white text-4xl text-center font-bold"> {WeatherData?.weather[0].description} </p>
              <img className='w-5/12 flex-1 ml-6 mt-6' src={WeatherIcon} alt="Icon"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
