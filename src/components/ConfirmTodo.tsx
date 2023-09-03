import React from "react";
import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { pxToRem } from "../utils/font";

export default function ConfirmTodo() {
  return (
    <Box p={2}>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <IconButton>
          <CloseIcon
            sx={{
              color: "black",
            }}
          />
        </IconButton>
      </Box>

      <Typography fontSize={pxToRem(18)} fontWeight={"bold"} mb={3}>
        Create Wireframe
      </Typography>
      <Box display={"flex"} alignItems={"center"}>
        <CalendarTodayOutlinedIcon sx={{ mr: 1 }} color='primary' />
        <Typography fontWeight={500}> 20th January, 2023</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} mt={2}>
        <AccessTimeOutlinedIcon sx={{ mr: 1 }} color='primary' />
        <Typography fontWeight={500}>8:00 - 10:00 AM</Typography>
      </Box>

      <Stack
        direction='row'
        display='flex'
        justifyContent={"space-between"}
        gap={2}
        mt={3}
        sx={{
          width: "100%",
        }}
      >
        <Button
          fullWidth
          variant='outlined'
          sx={{
            borderRadius: "8px",
          }}
        >
          Delete
        </Button>
        <Button
          sx={{
            borderRadius: "8px",
          }}
          fullWidth
        >
          Edit
        </Button>
      </Stack>
    </Box>
  );
}
