import React from "react";
import { Stack, Typography, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography variant="h5">
          {/* sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C" */}
          Exercises keep you strong. {name}{" "}
          {/* <span style={{ textTransform: 'capitalize' }}>{name}</span>  */}
          is one of the best exercises to target your {target}. Exercises helps
          you improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button sx={{background: "#fff2db", borderRadius: "50%", width:"100px", height: "100px"}}>
              <img src={item.icon} alt={bodyPart} />
            </Button>
            <Typography variant="h4" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
