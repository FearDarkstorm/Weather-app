import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Navbar from "./Navbar";
import { useState } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import WeatherForm from "../Weather Form/WeatherForm";
import UserLocation from "../WeatherByLocation/WeatherByLocation";
import { useEffect } from "react";
import WeatherByLocation from "../WeatherByLocation/WeatherByLocation";
import WeatherTable from "../Form Table/WeatherTable";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import './logo.png'

import { width } from "@mui/system";

const clouds =
  "https://freepngimg.com/thumb/cloud/78635-decorative-vector-clouds-papercutting-pattern-effect-cutting.png";

const Section1 = () => {
  const logo = './logo.png'
  const currCity = useSelector((state) => state.weather.Area.name);
  const currTemprature = useSelector((state) => state.weather.Temperature);
  const currCondition = useSelector((state) => state.weather.Condition);
  const currHumidity = useSelector((state) => state.weather.Humidity);
  const dispatch = useDispatch();
  const location1 = useSelector((state) => state.weather.City.city);

  useEffect(() => {
    WeatherByLocation(dispatch,location1);

  },[])
  const airq = () => {
    let random = Math.floor(Math.random() * 5);
    let currair;
    if (random === 1) {
      currair = "good";
    } else {
      if (random === 2) {
        currair = "bad";
      } else {
        if (random === 3) {
          currair = "fair";
        } else {
          currair = "awful";
        }
      }
    }
    console.log(currair)
  };
   airq();
  useEffect(() => {
    WeatherByLocation();
  }, []);
  const sky =
    "https://images.freeimages.com/images/large-previews/fe1/rain-1183933.jpg";

  const text = "custom city search";
  const bg =
    "https://th.bing.com/th/id/R.0fd6d71a935d544643c465db2bfc3c6c?rik=iOTTfr8MKkYtgQ&pid=ImgRaw&r=0";

  return (
    <div >
      <div style={{display:'none',justifyContent:'center',alignItems:'center',height:'100vh'}} > <CircularProgress size={'200px'}/> </div>
    <div style={{display:'block'}}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Grid
        container
        sx={{
          width: "90vw",
          border: "1px solid #EDEDED",
          height: "750px",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            backgroundColor: "#1C3E66",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <div
              style={{ fontSize: "24px", color: "#EDEDED", fontWeight: "bold" }}
            >
              Weather<span style={{ color: "red" }}>Strings</span>
            </div>
            <div
              style={{ fontSize: "24px", color: "#EDEDED", fontWeight: "bold" }}
            ></div>
            <div
              style={{ fontSize: "24px", color: "#EDEDED", fontWeight: "bold" }}
            >
              {currCity}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            {" "}
            <div style={{ marginTop: "30vh", color: "#EDEDED" }}>
              <h1>The only weather App you need !</h1>
              <WeatherForm />
            </div>
          </div>
        </Grid>
        <Grid item sm={6} sx={{ backgroundColor: "#cc7722" }}>
          <div style={{ margin: "40px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ color: "#EDEDED" }}>Today</h1>
              <h2 style={{ color: "#EDEDED" }}>29 March 2023</h2>
            </div>
            <div style={{ border: "1px solid white", borderRadius: "30px" }}>
              <Grid container>
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#EDEDED",
                      alignItems: "center",
                    }}
                  >
                    <h2>{currTemprature}C</h2>
                    <h2>{currCondition}</h2>
                    <h2>{currHumidity}%</h2>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#EDEDED",
                      alignItems: "center",
                    }}
                  >
                    <h3>Temprature-Real: {currTemprature + 2} </h3>
                    <h3>Air Quality: Fair </h3>
                    <h3>Min: {currTemprature - 3} </h3>
                    <h3>Max: {currTemprature + 4 }</h3>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

          <div style={{textAlign:'center'}}>
            <h1 style={{fontSize:'50px',marginTop:'150px',color:'#EDEDED'}}>
                Weather<span style={{color:'red'}}>Strings</span>
            </h1>
          </div>
        </Grid>
      </Grid>
    </div>
    </div>
    </div>
  );
};

export default Section1;
