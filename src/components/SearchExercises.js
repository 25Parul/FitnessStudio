import React, { useEffect, useState }from 'react';
import {Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from "./HorizontalScrollbar";
import Exercises from './Exercises';

const SearchExercises = ({setExercises, bodyPart, setBodyPart, setCurrentPage}) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);
  
    useEffect(() => {
      
      // Fetching bodyPartData from localStorage
      let bodyPartsData = JSON.parse(localStorage.getItem('bodyParts'));
  
      // Fetch bodyPartList information from RapidAPI: ExerciseDB
      if (bodyPartsData === null) {
        const fetchExercisesData = async () => {
          bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
            exerciseOptions);
          setBodyParts(["all", ...bodyPartsData]);
          // Saving bodyPartData in localStorage
          localStorage.setItem("bodyParts", JSON.stringify(bodyPartsData));
        }
        fetchExercisesData();
      } else {
        setBodyParts(["all", ...bodyPartsData]);
      }
    }, []);

const handleSearch = async () => {
  

    if (search) {
        // Fetching allExercisesData from localStorage
        let exercisesData = JSON.parse(localStorage.getItem('allExercisesData'));
        
        // Fetch allExercisesData information from RapidAPI: ExerciseDB
        if (exercisesData === null) {
            exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
            // Saving allExercisesData in localStorage
            localStorage.setItem("allExercisesData", JSON.stringify(exercisesData));
        }
    
        const searchedExercises = exercisesData.filter(
        (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );
    
        setSearch("");
        console.log("setting current page")
        setCurrentPage(1)
        setExercises(searchedExercises);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
};
      

  return (
    <Stack alignItems='center' mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700}
        mb="50px" textAlign="center"
        sx= {{fontSize: {lg:"44px", xs:"30px"}}}>
            Awesome Exercises you <br /> should know
        </Typography>
        <Box position="relative" mb="72px" >
            <TextField 
            sx={{
                input:{
                    fontWeight: "700",
                    border: "none",
                    borderRadius:"4px"
                },
                width: {lg:"1170px", xs:"350px"},
                backgroundColor: "#fff",
                borderRadius:"40px"
            }}
            height="76px"
            type="text"
            value={search}
            onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
            placeholder='Search Exercises'/>
            <Button className="search-btn" onClick={handleSearch}
            sx={{
                bgcolor:"#ff2625",
                color:"#fff",
                textTransform: "none",
                width:{ lg:"175px", xs:"80px" },
                fontSize: { lg: "20px", xs: "14px"},
                height: "56px",
                position:"absolute",
                right: 0
            }}>
                Search
            </Button>
        </Box>
        <Box sx={{position: "relative", width: "100%", p:"20px"}}>
            <HorizontalScrollbar data ={bodyParts} bodypart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
        </Box>
    </Stack>
  );
};

export default SearchExercises
