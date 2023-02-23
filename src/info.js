
export default class info{
    static async getweather(city){
        
        const fetchResponse=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f9c121c0d80f56fd2c9005d71e216fa8`);
        const weather=await fetchResponse.json();
        if(weather.cod==="404"){
            return 404;
        }
        return weather;
        
        
        
    }
    static async getTmp(city){
        const ret=await info.getweather(city);
        return ret.main.temp;
    }
    static async getFeelsLike(city){
        const ret = await info.getweather(city);
        return ret.main.feels_like;
    }
    static async getName(city){
        const ret = await info.getweather(city);
        return {name: ret.name,country: ret.sys.country};
    }
    static async getWind(city){
        const ret = await info.getweather(city);
        return ret.wind.speed;
    }
    static async getMainWeather(city){
        const ret = await info.getweather(city);
        return ret.weather[0].main;
    }
}