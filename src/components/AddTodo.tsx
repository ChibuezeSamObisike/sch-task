import React from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { pxToRem } from "../utils/font";

export default function AddTodo() {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={2}
      >
        <Typography fontWeight='bold' fontSize={pxToRem(18)}>
          Add Task
        </Typography>
        <IconButton>
          <CloseIcon
            sx={{
              color: "black",
            }}
          />
        </IconButton>
      </Box>

      <TextField
        multiline
        fullWidth
        rows={4}
        sx={{
          height: "70%",
          bgcolor: "#f9fafb",
        }}
      />

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={3}
      >
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <NotificationsIcon
            sx={{
              color: "#667085",
              mr: 1,
            }}
          />
          <Typography color='#667085'>10 Minutes before</Typography>
        </Box>
        <CloseIcon
          sx={{
            color: "#667085",
          }}
        />
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
          Cancel
        </Button>
        <Button
          sx={{
            borderRadius: "8px",
          }}
          fullWidth
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
}
