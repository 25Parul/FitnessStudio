import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [bodyPart]);

  useEffect(() => {
    // Fetching allExercisesData from localStorage
    let allExercisesData = JSON.parse(localStorage.getItem("allExercisesData"));

    const fetchExercisesDataFromAPI = async () => {
      // Fetch allExercisesData information from RapidAPI: ExerciseDB
      if (allExercisesData === null) {
        allExercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        // Saving allExercisesData in localStorage
        localStorage.setItem(
          "allExercisesData",
          JSON.stringify(allExercisesData)
        );

        console.log(allExercisesData);
        setExercises(allExercisesData);
      }
    };

    fetchExercisesDataFromAPI();
  }, []);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setCurrentPage={setCurrentPage}
      />
      {exercises && (
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </Box>
  );
};

export default Home;
