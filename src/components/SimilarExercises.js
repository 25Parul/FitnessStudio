import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box>
    {targetMuscleExercises.length} <br/>
    {equipmentExercises.length}
  </Box> 
);
export default SimilarExercises
