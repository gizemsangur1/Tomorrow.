import { Grid } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <Grid container direction="row" className={styles.container}>
      <Grid item md={3} sm={3}>
        <p className={styles.title}>Tomorrow.</p>
      </Grid>
      <Grid item md={6} sx={{ justifyContent: "space-between",display:{md:"inline",sm:"none",xs:"none"} }}>
        <Grid container>
          <Grid item xs={4}>
            <a href="/" className={styles.navitems}>
              About Us
            </a>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "center" }}>
            <Link href="/team" className={styles.navitems}>
              Our Teams
            </Link>
          </Grid>
          <Grid item xs={4} sx={{ textAlign: "end" }}>
            <Link href="/news" className={styles.navitems}>
              News
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} sx={{ display: "grid", justifyContent: "end" }} sm={9}>
        <Grid sx={{ display:{md:"inline",sm:"none",xs:"none"} }}>
          <Link href="/contact" className={styles.button}>
          <p style={{ margin: "10px" }}>Contact Us </p>
          <AiOutlineMail size="24px" />
        </Link>
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default Navbar;
