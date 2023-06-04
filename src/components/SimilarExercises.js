import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import { useEffect } from 'react';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  
  useEffect(() => {
    window.scroll(0, 0);
}, []);
  
return(
  <Box sx= {{mt: {lg:"100px", xs: "0"}}}>
    <Typography variant='h4' mb= {5} ml = {2}>
      Exercises that target the same muscle group
    </Typography>
    <Stack direction="row" sx= {{p:"2", position :"relative"}}>
      {targetMuscleExercises.length ?  <HorizontalScrollbar data = {targetMuscleExercises} />
      : <Loader />}
    </Stack>
    <Typography variant='h4' mb= {5} ml={2} mt={5}>
      Exercises that uses the same equipment
    </Typography>
    <Stack direction="row" sx= {{p:"2", position :"relative"}}>
      {equipmentExercises.length ?  <HorizontalScrollbar data = {equipmentExercises} />
      : <Loader />}
    </Stack>
  </Box> 
)
};
export default SimilarExercises
