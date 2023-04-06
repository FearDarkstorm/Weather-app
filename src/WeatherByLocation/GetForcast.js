import axios from "axios";

const API_KEY = "feda1cc906msh51d00870a242575p1da65ejsn05efaf474ee8";
const API_HOST = "weatherapi-com.p.rapidapi.com";
const API_URL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
const LOCATION = "31.582045,74.329376";
const days = 6;


  const getWeather = async () => {
     
//     try {
//     const response = await axios.get(API_URL, {
//       params: { q: LOCATION,days: days  },
//       headers: {
//         "X-RapidAPI-Key": API_KEY,
//         "X-RapidAPI-Host": API_HOST,
//       },
//     });

//      const res = response.data
//      const forecast = res.forecast.forecastday;
//      const [FirstDay,SecondDay,ThirdDay,FourthDay,FifthDay,SixDay] = forecast;

//     console.log(FirstDay);
//     console.log(SecondDay);
//     console.log(ThirdDay);
//   } catch (error) {
//     console.error(error);
//   }
};
 
 
export default getWeather;
 