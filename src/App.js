import React from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";


const App = () => {
  return (
    // Responsive design: Box is 400px wide by default but expands upto 1488px for bigger screens that meet the xl breakpoint criteria.
    <Box width="400px" sx={{width:{x1:"1488px"}}} m="auto"> 
        <Navbar />
        <Routes>
            <Route path ="/" element = {<Home />} />
            <Route path ="/exercise/:id" element = {<ExerciseDetail />} />
            <Route path ="/Home" element= {<Home />} />
        </Routes>
        <Footer />
    </Box>

  )
}

export default App
