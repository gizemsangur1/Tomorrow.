import React from "react";
import styles from "./page.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Grid, Typography } from "@mui/material";
const Parts = (props) => {
  return (
    <Grid container className={styles.container}>
      <Grid container direction="row" className={styles.row}>
        <Grid item xs={6}>
          <Grid container className={styles.insidecontainer}>
            <Grid item xs={6} className={styles.item}>
              <Grid className={styles.photo1}>
                <Grid sx={{ justifyContent: "center", alignItems: "center" }}>
                  <Typography className={styles.heading}>50+</Typography>
                  <Typography className={styles.heading}>Partner</Typography>
                  <button className={styles.button}>Discover More</button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" className={styles.row}>
                <Grid item xs={12} className={styles.itemd}>
                  <Grid className={styles.photo}>
                    <BsArrowRight color="white" size="64px" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={styles.ball}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid className={styles.ball}></Grid>
          <Grid sx={{padding:"12px",margin:"12px"}}> 
            <Typography className={styles.heading}>What we do</Typography>
            <Typography sx={{fontSize:"24px",color:"white"}}>8 Service</Typography>
            <Grid sx={{width:"50%",border:"1px solid white"}}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.row}>
        <Grid className={styles.ball}></Grid>
      </Grid>
    </Grid>
  );
};

export default Parts;
