import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Title: "",
  City: "",
  Area: "",
  Temperature: 0,
  Condition: "",
  Humidity: 0,
  Wind: 0,
  Forcast: {},
  display: 'none'
};

const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getCity: (state, action) => {
      state.City = action.payload;
    },
    addArea: (state, action) => {
      state.Area = action.payload;
    },
    addTemperature: (state, action) => {
      state.Temperature = action.payload;
    },
    addCondition: (state, action) => {
      state.Condition = action.payload;
    },
    addHumidity: (state, action) => {
      state.Humidity = action.payload;
    },
    addWind: (state, action) => {
      state.Wind = action.payload;
    },
    addTitle: (state, action) => {
      state.Title = action.payload;
    },
    addForcast: (state,action) => {

    },
    toggleOn: (state) => {
      state.display = 'block'
    },
    toggleOff: (state,display) => {
      state.display = 'none'
    }
    
  },
});

export const {
  addArea,
  addTemperature,
  addCondition,
  addHumidity,
  addWind,
  clearState,
  getCity,
  addTitle,
  addForcast,
  toggleOn,
  toggleOff
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
