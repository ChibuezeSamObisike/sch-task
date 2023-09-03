import React from "react";
import { AppBar, Container, Typography, Box, Avatar } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { pxToRem } from "../utils/font";

export default function Navbar() {
  return (
    <AppBar
      position='sticky'
      elevation={0}
      sx={{
        elevation: 0,
        py: 3,
        background: "white",
        color: "black",
        borderBottom: "1px solid #EAECF0",
      }}
    >
      <Container>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Typography fontWeight='bold' fontSize={pxToRem(24)}>
            ToDo
          </Typography>

          <MenuIcon
            sx={{
              display: { xs: "block", md: "none" },
              color: "#667085",
              cursor: "pointer",
            }}
          />
          <Box display={{ xs: "none", md: "flex" }} alignItems={"center"}>
            <SettingsOutlinedIcon
              sx={{
                mr: 2,
                cursor: "pointer",
                color: "#667085",
              }}
            />
            <NotificationsNoneRoundedIcon
              sx={{
                mr: 2,
                cursor: "pointer",
                color: "#667085",
              }}
            />
            <Avatar
              alt='Remy Sharp'
              src='/static/images/avatar/1.jpg'
              sx={{
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
