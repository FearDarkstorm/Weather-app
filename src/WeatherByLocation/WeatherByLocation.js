import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addHumidity, addWeather, addWind } from "../Store/WeatherSlice";
import { addTemperature } from "../Store/WeatherSlice";
import { addCondition } from "../Store/WeatherSlice";
import { addArea } from "../Store/WeatherSlice";
import { getCity } from "../Store/WeatherSlice";

//because it is not being considerd as a reactive component so we will only use dispatch as an argument
// and then use dispatch throught its parent component

const WeatherByLocation = (dispatch) => {
  
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const options = {
      method: "GET",
      url: "https://trueway-geocoding.p.rapidapi.com/ReverseGeocode",
      params: { location: `${latitude},${longitude}`, language: "en" },
      headers: {
        "X-RapidAPI-Key": "feda1cc906msh51d00870a242575p1da65ejsn05efaf474ee8",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {

        const locality = response.data.results[0].locality;
        dispatch(getCity(locality))

        const options2 = {
          method: "GET",
          url: "https://weatherapi-com.p.rapidapi.com/current.json",
          params: { q: `${locality}` },
          headers: {
            "X-RapidAPI-Key":
              "feda1cc906msh51d00870a242575p1da65ejsn05efaf474ee8",
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
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return <></>;
};

export default WeatherByLocation;
