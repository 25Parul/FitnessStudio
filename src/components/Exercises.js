import React from "react";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";



const Exercises = ({ exercises, setExercises, bodyPart, currentPage, setCurrentPage }) => {
  
  const exercisePerPage = 10;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise=indexOfLastExercise-exercisePerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: "smooth"})
  }


  useEffect(() => {
    let exercisesData = [];
  
    if (bodyPart === "all") {
      exercisesData = JSON.parse(localStorage.getItem('allExercisesData'));
    } else {
      const allExercisesData = JSON.parse(localStorage.getItem('allExercisesData'));
      exercisesData = allExercisesData.filter(exercise => exercise.bodyPart === bodyPart);
    }
  
    setExercises(exercisesData);
  }, [bodyPart]);
  

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
<Typography variant="h3" mb="46px">
  Showing Results
</Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
            
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 1 && (
            <Pagination count={Math.ceil(exercises.length/exercisePerPage)} 
            page={currentPage}
            onChange={paginate}
            color="standard" shape="rounded" size="large"/>
        )}

      </Stack>
    </Box>
  );
};



export default Exercises;
