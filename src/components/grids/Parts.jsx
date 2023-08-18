import React from "react";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
const Parts = (props) => {
  return (
    <Grid container className={styles.container}>
      <Grid container direction="row" className={styles.row}>
        <Grid item xs={6}>
          <Grid container className={styles.insidecontainer}>
            <Grid item xs={6} className={styles.item}>
              <Grid className={styles.photo}></Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="column" className={styles.row}>
                <Grid item xs={12} className={styles.itemd}>
                  <Grid className={styles.photo}></Grid>
                </Grid>
              </Grid>
              <Grid className={styles.ball}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid className={styles.ball}></Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" className={styles.row}>
        <Grid className={styles.ball}></Grid>
      </Grid>
    </Grid>
  );
};

export default Parts;
