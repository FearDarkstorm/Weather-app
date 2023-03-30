import { useForm } from "react-hook-form";
import React, { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import { CircularProgress, Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearState } from "../Store/WeatherSlice";
import { useSelector } from "react-redux";
import { getCity } from "../Store/WeatherSlice";
import WeatherBySearch from "../WeatherByLocation/WeatherBySearch";
import Autocomplete from "@mui/material/Autocomplete";
import debounce from "lodash/debounce";
import axios from "axios";

const WeatherForm = () => {
  const location = useSelector((state) => state.weather.City.city);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(getCity(data));
    WeatherBySearch(dispatch, data.city);
  };

  const [suggestions, setSuggestions] = useState([]);
  const [cache, setCache] = useState({});

  const fetchSuggestions = useCallback(
    debounce(async (searchText) => {
      if (cache[searchText]) {
        setSuggestions(cache[searchText]);
        return;
      }

      const apiUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchText}&limit=4`;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key":
              "feda1cc906msh51d00870a242575p1da65ejsn05efaf474ee8",
          },
        });

        const cityNames = response.data.data.map((city) => city.city);
        setCache((prevCache) => ({ ...prevCache, [searchText]: cityNames }));
        setSuggestions(cityNames);
      } catch (error) {
        console.error(error);
      }
    }, 500),
    []
  );

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          marginTop: "10px",
          width: "80vw",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                noOptionsText = {<div style={{textAlign:'center'}}><CircularProgress size={'30px'}/></div>}
                options={suggestions}
                onInputChange={(event, value) => fetchSuggestions(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="City"
                    placeholder="Enter your city"
                    fullWidth
                    {...register("city")}
                    sx={{
                      "& .MuiInputBase-input": { color: "white" },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "& .MuiInputLabel-root": { color: "white" },
                      "&:hover .MuiInputBase-input": { color: "white" },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                      },
                      "&.Mui-focused .MuiInputBase-input": { color: "grey" },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "grey",
                      },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <div style={{ textAlign: "center" }}>
                {" "}
                <Button
                sx={{
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "#cc7722" },
                  "&:active": { backgroundColor: "#cc7722" },
                  marginBottom:'5px'
                  
                }}
                 variant="contained" type="submit">
                 <span style={{color:'#0C3B66'}}> Submit </span>
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default WeatherForm;
