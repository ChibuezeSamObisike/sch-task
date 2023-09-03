import React from "react";
import { Box, Typography } from "@mui/material";

export default function DayNumber() {
  return (
    <Box
      borderRadius='8px'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flexDirection='column'
      border='1px solid #D0D5DD'
      padding={2}
      marginRight={2}
      marginTop={3}
      sx={{
        cursor: "pointer",
      }}
    >
      <Typography fontWeight={"bold"}>Mon</Typography>
      <Typography fontWeight={"bold"}>1</Typography>
    </Box>
  );
}
