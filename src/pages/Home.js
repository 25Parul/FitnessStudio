import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [bodyPart, setBodyPart]= useState("all");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1)
  }, [bodyPart])

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setCurrentPage={setCurrentPage} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </Box>
  )
}

export default Home
