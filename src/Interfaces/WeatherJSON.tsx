interface WeatherJSON {
    coord: {
      lon: number;
      lat: number;
    }
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      pressure: number;
      humidity: number;
    };
    weather: {
      id: number;
      description: string;
    }[];
}

export default WeatherJSON;