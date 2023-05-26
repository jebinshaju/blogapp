import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "aqua" }}>
        <Toolbar>
          <Typography
            color="yellow"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "1.2rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}align="left"
          >
            BLOG
          </Typography>
          <Button variant="contained" color="secondary">
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Dashboard
            </Link>{" "}
          </Button>&nbsp;&nbsp;
          <Button variant="contained" color="secondary">
            <Link
              to={"/add"}
              style={{ textDecoration: "none", color: "white" }}
            >
              ADD BLOGS
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
