import { AppBar, Avatar, Box, Button, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import React from "react";
import { Logout } from "@mui/icons-material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {logout} from "../../pages/auth/authService";
import is from "date-fns/esm/locale/is/index.js";

const Topbar = () => {
  let navigate: NavigateFunction = useNavigate();
  let isCompany= localStorage.getItem('user')?.split(',')[3].split(':')[1].substring(1,8)
  // console.log(isCompany?.split(',')[3].split(':')[1].substring(1,8))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    logout();
    navigate("/login", {replace:true})
  };
  const GoToProfile =() =>{
    navigate("/profile", {replace:true})
  }
  const handleRedirect=() =>{
    navigate("/postJob", {replace:true})
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: "#314363",
        color: "whitesmoke"
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontFamily="monospace" fontSize="30px" fontWeight="bold" align="center">
          Stagy Plateform
        </Typography>
      </Toolbar>
      <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textAlign: 'center',
            justifyContent: 'right',
            marginRight:'20px',
            marginTop : '-50px',
            marginBottom: '10px'
        }}>
        <Box>
         {isCompany == "Company" ?  
        <Button variant="outlined" style={{color: "whitesmoke",borderRadius:"10px",border: "1px solid whitesmoke",}}onClick={handleRedirect}>
          Post a job
        </Button>
        : <></>}
        </Box>
        
      <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={GoToProfile}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Topbar;