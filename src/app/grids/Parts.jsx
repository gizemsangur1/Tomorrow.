import React from "react";
import styles from "./page.module.css";
import { BsArrowRight } from "react-icons/bs";
import {  Grid, Typography } from "@mui/material";
const Parts = () => {
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
          <Grid container>
            <Grid item xs={6} sx={{ padding: "12px" }}>
              <Typography className={styles.heading}>What we do</Typography>
              <Typography sx={{ fontSize: "24px", color: "white" }}>
                5 Service
              </Typography>
              <Grid
                sx={{ width: "90%", border: "1px solid white", height: 0 }}
              ></Grid>
            </Grid>
            <Grid item xs={6} sx={{ padding: "12px" }}>
              <Grid container spacing={1}>
                <Grid item>
                  <button className={styles.buttonservice}>
                    Web Development
                  </button>
                </Grid>
                <Grid item>
                  <button className={styles.buttonservice}>3D Design</button>
                </Grid>
                <Grid item>
                  <button className={styles.buttonservice}>
                    Digital Marketing
                  </button>
                </Grid>
                <Grid item>
                  <button className={styles.buttonservice}>
                    Product Design
                  </button>
                </Grid>
                <Grid item>
                  <button className={styles.buttonservice}>Web Design</button>
                </Grid>
                <Grid item>
                  <button className={styles.buttonservice}>Illustrations</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.row}>
        <Grid className={styles.ball}></Grid>
        <Grid item xs={9} sx={{ position: "relative" }}>
          <Grid sx={{ alignItems: "end", display: "grid", padding: "24px" }}>
            <Typography
              sx={{
                fontSize: "24px",
                color: "grey",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Tomorrow.
            </Typography>
            <Typography sx={{ fontSize: "48px", color: "white" }}>
              We are a solution from the <br /> future innovation
            </Typography>
          </Grid>
          <Grid className={styles.ball2}></Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="row" className={styles.row1} sx={{ position: "relative" }}> 
        
              <Grid className={styles.ball2}></Grid>
          
          </Grid>
          <Grid container direction="row" className={styles.row2}>
            <Grid className={styles.itemf}>
              <Grid className={styles.photo2}>
                <Grid sx={{ justifyContent: "center", alignItems: "center" ,textAlign:"start",padding:"12px"}}>
                    <Grid container sx={{justifyContent:"space-between"}}>
                        <Grid item><Typography className={styles.heading3}>Careers</Typography></Grid>
                        <Grid item><Grid className={styles.icon1}></Grid></Grid>
                        <Grid item><Grid className={styles.icon2}></Grid></Grid>
                        <Grid item><Grid className={styles.icon3}></Grid></Grid>
                    </Grid>
                  <Typography className={styles.heading3}>Empowering Vision,</Typography>
                  <Typography className={styles.heading3}>Igniting Digital Spirits,</Typography>
                  <Typography className={styles.heading3}>Tomorrow and Beyond!</Typography>
                  <button className={styles.buttonjoin}>Join Us at Tomorrow Digital</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Parts;
