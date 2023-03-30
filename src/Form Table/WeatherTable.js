import { useDispatch } from "react-redux";
import { clearState } from "../Store/WeatherSlice";
import { useState } from "react";
import WeatherForm from "../Weather Form/WeatherForm";
import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";


const WeatherTable = () => {
  const currCity = useSelector((state) => state.weather.Area.name);
  const currTemprature = useSelector((state) => state.weather.Temperature);
  const currCondition = useSelector((state) => state.weather.Condition);
  const currHumidity = useSelector((state) => state.weather.Humidity);
  const dispatch = useDispatch();

  const clearForm = () => {
    dispatch(clearState);
  };

  const [display, setdisplay] = useState("none");
  const displayform = () => {
    if (display === "none") {
      setdisplay("block");
    } else {
      setdisplay("none");
    }
  };
  let text = 'custom city search';
   if (display === 'block') {
    text = 'hide menu'
   } else {
     text = 'custom city search'
   };

  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>City</TableCell>
              <TableCell align="right">Temperature </TableCell>
              <TableCell align="right"> Condition </TableCell>
              <TableCell align="right">Humidity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{currCity}</TableCell>
              <TableCell align="right">{currTemprature}</TableCell>
              <TableCell align="right">{currCondition}</TableCell>
              <TableCell align="right">{currHumidity}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center" }}>
        <Button
          sx={{ marginTop: "30px", backgroundColor: "blue" }}
          variant={"filled"}
          onClick={() => {
            displayform();
          }}
        >
          <span style={{ color: "white", fontWeight: "bold" }}>
          {text}
          </span>
        </Button>
      </div>
      <div style={{ display: display }}>
        <WeatherForm />
      </div>
    </div>
  );
};

export default WeatherTable;
