import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  City: "",
  Area: "",
  Temperature: 0,
  Condition: "",
  Humidity: 0,
  Wind: 0,
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
    clearState: (state) => {
      return initialState;
    },
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
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
