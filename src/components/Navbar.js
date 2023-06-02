import React from 'react';
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import "./Navbar.css"
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="Logo" className="img-logo" />
      </Link>
      <Stack direction="row" alignItems="flex-end">
        <Link to="/Home" className="home">Home</Link>
        <a className="exercise" href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;
