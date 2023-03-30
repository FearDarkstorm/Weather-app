import axios from "axios";
import {
  addHumidity,
  addWeather,
  addWind,
  addTemperature,
  addCondition,
  addArea,
} from "../Store/WeatherSlice";

const WeatherBySearch = (dispatch, searchloc) => {
  console.log(searchloc);
  const options2 = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${searchloc}` },

    headers: {
      "X-RapidAPI-Key": "feda1cc906msh51d00870a242575p1da65ejsn05efaf474ee8",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  

  axios
    .request(options2)
    .then(function (response) {
      const res = response.data.current;
      const tempc = res.temp_c;
      const condition = res.condition.text;
      const humidity = res.humidity;
      const area = response.data.location;

      dispatch(addTemperature(tempc));
      dispatch(addCondition(condition));
      dispatch(addHumidity(humidity));
      dispatch(addArea(area));
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default WeatherBySearch;
