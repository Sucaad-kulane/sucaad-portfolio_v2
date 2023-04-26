import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#618161", flexGrow: 1 }}>
        <Toolbar sx={{ color: "brown", justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Home
              </Typography>
            </Link>
            <Link to="/sucaad-kulane" style={{ textDecoration: "none" }}>
             
            </Link>
          </Stack>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button component={Link} to="/contact" color="inherit">
              Contact
            </Button>
            <Button component={Link} to="/project" color="inherit">
              Projects
            </Button>
          </Box>
          {isMobile && (
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <List sx={{ width: 250 }} onClick={toggleDrawer}>
                <ListItem>
                  
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/contact">
                  <ListItemText>Contact</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/project">
                  <ListItemText>Projects</ListItemText>
                </ListItem>
              </List>
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
