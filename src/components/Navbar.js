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
                  Sucaad Kulane
                </Typography>
              </Link>
            </Stack>
            {isMobile && (
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List sx={{ width: 250 }} onClick={toggleDrawer}>
                  <ListItem>
                    <ListItemText>
                      <Typography variant="h6" sx={{ color: "brown" }}>
                        Sucaad Kulane
                      </Typography>
                    </ListItemText>
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
