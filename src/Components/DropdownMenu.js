import React from 'react'
import { Box, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { setdisplay } from '../Store/WeatherSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleOff } from '../Store/WeatherSlice';

function DropdownMenu(props) {
  const dispatch = useDispatch();

  const currdisplay = useSelector((state) => state.weather.display);
  return (
    <Grid container sx={{display:currdisplay,position:'absolute',color:'white',width:{xs:'400px',sm:"600px",md:'900px',lg:'1200px'},height:'800px',backgroundColor:'black',zIndex:'+3',borderRadius:'20px'}}>
      <Grid item xs={12}>
        <div style={{textAlign:'end'}}>
        <CloseIcon onClick = {() => {
          dispatch(toggleOff());
        }}  sx={{width:'30px',height:'30px',color:'white',"&:hover": { color: "yellow" },padding:'5px 5px'}} />
        </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{textAlign:'center',padding:'80px 0px'}}>
          <h1>Showing weather forcast for {props.location}</h1></div>
        <Box component={'div'} sx={{textAlign:'center',display:'block'}}>
          <h2 style={{color:'white',}}>Weekly Weather Forcast</h2>
          <h3>Tommorow: {props.firstcondition} {(props.firsttemp)}</h3>
          <h3>2nd day: {props.secondcondition} {(props.secondtemp)}</h3>
          <h3>3rd day:  {props.thirdcondition} {(props.thirdtemp)}</h3>
          <h3>4th day:  {props.fourthcondition} {(props.fourthtemp)}</h3>
          <h3>5th day:  {props.fifthcondition} {(props.fifthtemp)}</h3>
          <h3>6th day:  {props.sixthcondition} {(props.sixthtemp)}</h3>

        </Box>
      </Grid>
    </Grid>
  )
}

export default DropdownMenu;
