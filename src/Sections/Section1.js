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
import DropdownMenu from "../Components/DropdownMenu";
import { toggleOn } from "../Store/WeatherSlice";

import './logo.png'
import { Block } from "@mui/icons-material";



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
  const Title = useSelector((state) => state.weather.Title.city )
  console.log(Title);

  const [display,setdisplay] = useState('flex');
  const [display2,setdisplay2] = useState('none')
  const [display3,setdisplay3] = useState('none')
  const checkdisplay = () => {
    if (typeof currCity === 'string') {
      setdisplay('none')
      setdisplay2('block')
    }
  }

  useEffect(() => {
    WeatherByLocation(dispatch,location1);

  },[])
  useEffect(()=> {
    checkdisplay();

  })
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
      <div style={{display:display,justifyContent:'center',alignItems:'center',height:'100vh'}} > <CircularProgress size={'200px'}/> </div>
    <div style={{display:display2}}>
     
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
      }}
    >
       <DropdownMenu />
      <Grid
        container
        sx={{
          width: "95vw",
          border: "1px solid #EDEDED",
          height:{md:"90vh",xs:'100vh'},
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          sm={12}
          md={5}

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
            <Box
              sx={{ fontSize: "24px", color: "#EDEDED", fontWeight: "bold",display:{xs:'none',sm:'block'}}}
            >
              {currCity}
            </Box>
          </div>
          <Box
              sx={{ fontSize: "24px",textAlign:'end',marginRight:'20px',color: "#EDEDED", fontWeight: "bold",display:{xs:'block',sm:'none'}}}
            >
              {currCity}
            </Box>

          <div style={{ textAlign: "center" }}>
            {" "}
            <Box sx={{ marginTop:{md:"30vh",xs:'60px'}, color: "#EDEDED" }}>
              <h1>The only weather App you need !</h1>
              <WeatherForm  />
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={7} sx={{ backgroundColor: "#cc7722" }}>
          <div style={{ margin: "40px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ color: "#EDEDED" }}>Today</h1>
              <h2 style={{ color: "#EDEDED" }}>29 March 2023</h2>
            </div>
            <div style={{ border: "1px solid white", borderRadius: "30px",padding:'30px 0px' }}>
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
                    <Typography sx={{fontSize:{md:'24px',xs:'18.8px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}>Temprature: {currTemprature}C</Typography>
                    <Typography sx={{fontSize:{md:'24px',xs:'18.8px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}raphy>Condition: {currCondition}</Typography>
                    <Typography sx={{fontSize:{md:'24px',xs:'18.8px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}raphy>Humidity: {currHumidity}%</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#EDEDED",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{fontSize:{md:'20.8px',sm:'16px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}>Temprature-Real: {currTemprature + 2} </Typography>
                    <Typography sx={{fontSize:{md:'20.8px',sm:'16px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}>Air Quality: Fair </Typography>
                    <Typography sx={{fontSize:{md:'20.8px',sm:'16px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}>Min: {currTemprature - 3} </Typography>
                    <Typography sx={{fontSize:{md:'20.8px',sm:'16px'},fontWeight:'bold',padding:{md:'10px 0px',xs:'6px 0px'}}}>Max: {currTemprature + 4 }</Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
         <div style={{textAlign:'center'}}> <Box>
          <Button variant='contained' sx={{backgroundColor:'#1C3E66'}} onClick={() => {
            dispatch(toggleOn());
          }}> Get Weather Forcast</Button>
          </Box>
          </div>

          <Box sx={{textAlign:'center',display:{xs:"none",md:"block"}}}>
            <h1 style={{fontSize:'50px',marginTop:'150px',color:'#EDEDED'}}>
                Weather<span style={{color:'red'}}>Strings</span>
            </h1>
          </Box>
        </Grid>
      </Grid>
    </div>
    </div>
    
    </div>
  );
};

export default Section1;
