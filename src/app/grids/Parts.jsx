import React from "react";
import styles from "./page.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Grid, Typography } from "@mui/material";
const Parts = () => {
 
  return (
    <Grid container className={styles.container}>
      <Grid container direction="row" className={styles.row}>
        <Grid item md={6} sm={12} xs={12}>
          <Grid container className={styles.insidecontainer}>
            <Grid item sm={12} md={6} xs={12} className={styles.item}>
              <Grid className={styles.photo1}>
                <Grid sx={{ justifyContent: "center", alignItems: "center" }}>
                  <Typography className={styles.heading}>50+</Typography>
                  <Typography className={styles.heading}>Partner</Typography>
                  <button className={styles.button}>Discover More</button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{display:{md:"inline",sm:"none",xs:"none"}}}>
              <Grid container direction="column" className={styles.row}>
                <Grid item xs={12} className={styles.itemd}>
                  <Grid className={styles.photo}>
                    <BsArrowRight color="white" size="64px" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid className={styles.ball} ></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12} xs={12} sx={{display:{md:"grid",sm:"none",xs:"none"}}}>
          <Grid className={styles.ball} ></Grid>
          <Grid container >
            <Grid item md={6} sm={12} xs={12} sx={{ padding: "12px"}} >
              <Typography className={styles.heading}>What we do</Typography>
              <Typography sx={{ fontSize: "24px", color: "white" }}>
                6 Service
              </Typography>
              <Grid
                sx={{ width: "90%", border: "1px solid white", height: 0 }}
              ></Grid>
            </Grid>
            <Grid item md={6} sm={12} xs={12} sx={{ padding: "12px"}}>
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
                  <button className={styles.buttonservice}>
                    Illustrations
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.row}>
        <Grid className={styles.ball} sx={{display:{md:"inline",sm:"none",xs:"none"}}}></Grid>
        <Grid
          item
          md={9}
          sm={12}
          xs={12}
          sx={{ position: "relative", alignItems: "end", display: "grid",padding:"2vw" }}
        >
          <Grid >
            <Typography
              sx={{
                fontSize: "24px",
                color: {md:"grey",sm:"white",xs:"white"},
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign:{md:"start",sm:"center",xs:"center"}
              }}
            >
              Tomorrow.
            </Typography>
            <Typography sx={{ fontSize: "24px", color: "white" ,textAlign:{md:"start",sm:"center",xs:"center"}}}>
              We are a solution from the <br /> future innovation
            </Typography>
          </Grid>

          <Grid className={styles.ball2}  sx={{display:{md:"inline",sm:"none",xs:"none"}}} ></Grid>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Grid
            container
            direction="row"
            className={styles.row1}
            sx={{ position: "relative" }}
          >
            <Grid className={styles.ball2} ></Grid>
          </Grid>
          <Grid container direction="row" className={styles.row2}>
            <Grid className={styles.itemf}>
             <Grid className={styles.photo2}>
                <Grid
                  sx={{
                    display:"grid",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "start",
                    padding: "12px",
                  }}
                >
                  <Grid container sx={{ justifyContent: "space-between",alignItems:"center" ,margin:"5px"}}>
                    <Grid item>
                      <Typography className={styles.heading3}>
                        Careers
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid className={styles.icon1}></Grid>
                    </Grid>
                    <Grid item>
                      <Grid className={styles.icon2}></Grid>
                    </Grid>
                    <Grid item>
                      <Grid className={styles.icon3}></Grid>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ justifyContent: "center",alignItems:"center" ,margin:"5px"}}>
                    <button className={styles.buttonjoin}>
                    Join Us at Tomorrow Digital
                  </button>
                  </Grid>
                  
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
