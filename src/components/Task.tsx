import React from "react";

import { Box, Stack, Typography, Checkbox } from "@mui/material";

export default function Task() {
  return (
    <Box
      p='20px'
      bgcolor='#F9FAFB'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      borderBottom='1px solid #EAECF0'
      mb={3}
    >
      <Box display='flex' alignItems='center'>
        <Checkbox
          sx={{
            color: "#D0D5DD",
            bgcolor: "transparent",
            "& .MuiSvgIcon-root": { fontSize: "1.4rem" },
          }}
        />
        <Stack>
          <Typography fontWeight={500}>Create Wireframe</Typography>
          <Typography color='#475467'>10:30 am - 11:30 am</Typography>
        </Stack>
      </Box>
      <Typography>Today</Typography>
    </Box>
  );
}
