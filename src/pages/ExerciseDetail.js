import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 500, behavior: "smooth" });

    // Fetching allExercisesData from localStorage
    let allExercisesData = JSON.parse(localStorage.getItem("allExercisesData"));

    // Exercise Detail by Id
    const exerciseDetailDataById = allExercisesData.find(
      (exerciseData) => exerciseData.id.toLowerCase() === id
    );
    setExerciseDetail(exerciseDetailDataById);

    // Fetching exercises with name from youtube
    const youTubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";
    const fetchExerciseVideos = async () => {
      // Fetch exercise videos data from RapidAPI: YouTube Search
      const exerciseVideosData = await fetchData(
        `${youTubeSearchUrl}/search?query=${exerciseDetailDataById.name}&sort=relevance`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExerciseVideos();

    // More exercises by Target Muscle
    const moreExercisesByTargetMuscle = allExercisesData.filter(
      (exerciseData) =>
        exerciseData.target.toLowerCase() === exerciseDetailDataById.target
    );
    setTargetMuscleExercises(moreExercisesByTargetMuscle);

    // More exercises by Equipment
    const moreExercisesByEquipment = allExercisesData.filter(
      (exerciseData) =>
        exerciseData.equipment.toLowerCase() ===
        exerciseDetailDataById.equipment
    );
    setEquipmentExercises(moreExercisesByEquipment);
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
