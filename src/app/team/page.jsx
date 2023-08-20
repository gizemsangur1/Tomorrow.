"use client";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Image from "next/image";

const Team = () => {
  return (
    <Grid container className={styles.container}>
      <Grid container direction="row" className={styles.container1}>
         <Grid item md={5} sm={12} className={styles.titleitem}  sx={{ display: { sm: "grid",xs:"grid", md: "none" }, justifyContent: { sm: "center",xs:"center", md: "start" }}}>
          <Grid className={styles.titlediv}>
            <h1 className={styles.title}>OUR TEAM</h1>
          </Grid>
        </Grid> 
        <Grid item md={7} sm={12} className={styles.imagediv}>
          <Grid container>
            <Grid item xs={8}  sx={{justifyContent:"end",alignItems:"center",display:"grid"}}>
              <Grid className={styles.image}></Grid>
            </Grid>
            <Grid item xs={4} sx={{justifyContent:"start",alignItems:"end",display:"grid"}}>
              <Grid>
                <h1 className={styles.subtitle}>Lorelai Gilmore</h1>
                <h2 className={styles.subtitle}>Co-Founder</h2>                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12} className={styles.titleitem}  sx={{ display: { sm: "none",xs:"none", md: "grid" }}}>
          <Grid className={styles.titlediv}>
            <h1 className={styles.title}>OUR TEAM</h1>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.container1} spacing={6}>
        <Grid item sm={6} xs={12}>
        <Grid container>
            <Grid item xs={6}  sx={{justifyContent:"end",alignItems:"center",display:"grid"}}>
              <Grid className={styles.image1}></Grid>
            </Grid>
            <Grid item xs={6} sx={{justifyContent:"start",alignItems:"end",display:"grid"}}>
              <Grid>
                <h1 className={styles.subtitle}>Luke Danes</h1>
                <h2 className={styles.subtitle}>Developer</h2>                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
        <Grid container>
            <Grid item xs={6}  sx={{justifyContent:"end",alignItems:"center",display:"grid"}}>
              <Grid className={styles.image2}></Grid>
            </Grid>
            <Grid item xs={6} sx={{justifyContent:"start",alignItems:"end",display:"grid"}}>
              <Grid>
                <h1 className={styles.subtitle}>Kirk Gleason</h1>
                <h2 className={styles.subtitle}>Developer</h2>                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
