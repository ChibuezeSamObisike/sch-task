import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import {
  Button,
  Typography,
  Box,
  Container,
  Paper,
  TextField,
  SwipeableDrawer,
} from "@mui/material";

import { pxToRem } from "../utils/font";
import DayNumber from "../components/DayNumber";
import Task from "../components/Task";
import ConfirmTodo from "../components/ConfirmTodo";
import AddTodo from "../components/AddTodo";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);
  return (
    <>
      <Container
        sx={{
          mt: 3,
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography fontWeight={"bold"} fontSize={pxToRem(32)}>
              Good morning!
            </Typography>
            <Typography color='#475467'>You got some task to do. </Typography>
          </Box>
          <Button
            startIcon={<AddIcon />}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            Create New Task
          </Button>
        </Box>
        <Box
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          mt={5}
        >
          <Box width={{ xs: "100%", md: "65%" }}>
            <Typography fontWeight='bold'>January 2023</Typography>
            <Box overflow={"scroll"} display={"flex"} alignItems={"center"}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (x) => (
                  <DayNumber />
                )
              )}
            </Box>

            <Typography my={2} fontWeight='bold'>
              My Tasks
            </Typography>

            <Box>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
                <Task />
              ))}
            </Box>
          </Box>
          <Box
            borderLeft='1px solid #EAECF0'
            paddingLeft={4}
            width={"30%"}
            display={{ xs: "none", md: "block" }}
            height={"100vh"}
          >
            <ConfirmTodo />

            <Box mt={3}>
              <AddTodo />
            </Box>
          </Box>
        </Box>
      </Container>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 3,
          paddingBottom: 5,
          display: { xs: "block", md: "none" },
        }}
      >
        <TextField
          fullWidth
          placeholder='Input task'
          sx={{
            borderRadius: "8px",
            bgcolor: "#1018280",
          }}
          InputProps={{
            endAdornment: <KeyboardVoiceIcon color='primary' />,
          }}
        />
      </Paper>
      <SwipeableDrawer
        anchor={"bottom"}
        sx={{
          mx: 10,
          borderRadius: 30,
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <Box
          sx={{
            borderRadius: "30px",
            p: 5,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          height='50vh'
        >
          Hello world
        </Box>
      </SwipeableDrawer>
    </>
  );
}
