import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import getWeather from '../WeatherByLocation/GetForcast';

function Navbar() {
  getWeather()
  return (
    <div></div>
  );
}

export default Navbar;


