import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import image from "./unnamed.jpg";
// import image from "./unnamed.jpg";
import { useStyles } from "../HeaderStyles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../auth";
import Login from "../../BodyComponent/Login/Login";
import swal from "sweetalert";

export default function Profile() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useAuth();
  const handleLogout = () => {
    
    swal({
      // title: "Are you sure you want to logout ?  ",
      text: "Are you sure you want to logout ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (data) => {
      if(data) {
        localStorage.removeItem("loggedInUserDetails");
        // navigate("/");
        if (!user) return <Login />;
        navigate("/");
        window.location.reload();
        swal("Logging out !!", {
          buttons: false,
          timer: 3000,
        });
      }else {

      }
    })
  };

  const dropDownData = [
    // { label: "settings", icon: <SettingsIcon /> },
    { label: "Logout" },
  ];

  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={
          <Avatar
            src="https://logodix.com/logo/649370.png"
            className={classes.navAvatar}
          ></Avatar>
        }
      ></Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropDownData.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText onClick={handleLogout}>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
