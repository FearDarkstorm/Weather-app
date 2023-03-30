import Navbar from "./Sections/Navbar";
import Section1 from "./Sections/Section1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLocation from "./WeatherByLocation/WeatherByLocation";
import store from "./Store/Store";
import WeatherSlice from "./Store/WeatherSlice";
import { Provider } from "react-redux";

function App() {

  return (
    
  <Provider store={store} >
      <Navbar/>
      <Section1/>
      </Provider>
  );
}

export default App;
