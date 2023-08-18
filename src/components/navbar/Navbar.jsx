import { Grid } from "@mui/material";
import { AiOutlineMail } from 'react-icons/ai';
import React from "react";
import styles from "./page.module.css"

const Navbar = () => {
  return (
    <Grid container direction="row" className={styles.container}>
      <Grid item xs={3}>
        <p className={styles.title}>Tomorrow.</p>
      </Grid>
      <Grid item xs={6} >
        <Grid container >
          <Grid item xs={4}>
            <a href="/" className={styles.navitems}>About Us</a>
          </Grid>
          <Grid item xs={4}>
          <a className={styles.navitems}>Our Teams</a>
          </Grid>
          <Grid item xs={4}>
          <a className={styles.navitems}>News</a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <button className={styles.button}>
            <p style={{margin:"10px"}}>Contact Us </p> 
            <AiOutlineMail size="24px"/>
        </button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
