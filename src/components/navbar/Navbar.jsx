import { Button, Grid, Typography } from "@mui/material";
import { AiOutlineMail } from 'react-icons/ai';
import React from "react";

const Navbar = () => {
  return (
    <Grid container direction="row">
      <Grid item xs={2}>
        <Typography>Tomorrow.</Typography>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={4}>
            <Typography>About Us</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>Our Teams</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography>News</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button>Contact Us 
            <AiOutlineMail/>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
