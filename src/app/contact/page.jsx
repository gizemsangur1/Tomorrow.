import React from "react";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
const page = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item sm={3}></Grid>
      <Grid item sm={6} xs={12} className={styles.form}>
        <Grid container>
        <Grid item xs={1.5}/>
          <Grid item xs={9}>
            <form>
              <div className={styles.formgroup}>
                <input
                  type="name"
                  placeholder="Name"
                  className={styles.input}
                ></input>
              </div>
              <div className={styles.formgroup}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                ></input>
              </div>
              <div className={styles.formgroup}>
                <textarea
                  type="message"
                  placeholder="Write your message..."
                  className={styles.input}
                ></textarea>
              </div>
              <div>
                <button className={styles.button}>Send</button>
              </div>
            </form>
          </Grid>
          <Grid item xs={1.5}/>
        </Grid>
      </Grid>
      <Grid item sm={3}></Grid>
    </Grid>
  );
};

export default page;