import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: "15px" }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Get the Fitness Pro App for free. Paid membership starts at $14.99/mo.
        Cancel anytime before free trial ends. < br/>
        Start your 30 days with Fitness Pro.
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
