import { Grid } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <Grid container direction="row" className={styles.container}>
      <Grid item xs={3}>
        <p className={styles.title}>Tomorrow.</p>
      </Grid>
      <Grid item xs={6} sx={{ justifyContent: "space-between" }}>
        <Grid container>
          <Grid item xs={4}>
            <a href="/" className={styles.navitems}>
              About Us
            </a>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <a className={styles.navitems}>Our Teams</a>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "end" }}>
            <Link href="/news" className={styles.navitems}>
              News
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} sx={{ display: "grid", justifyContent: "end" }}>
        <Link href="/contact" className={styles.button}>
          <p style={{ margin: "10px" }}>Contact Us </p>
          <AiOutlineMail size="24px" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
