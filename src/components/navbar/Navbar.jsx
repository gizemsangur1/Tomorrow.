"use client"
import { Grid } from "@mui/material";
import { AiOutlineMail } from "react-icons/ai";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Grid container direction="row" className={styles.container}>
      <Grid item md={3} sm={3} xs={3}>
        <p className={styles.title}>Tomorrow.</p>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          justifyContent: "center",
          display: { md: "inline", sm: "none", xs: "none" },
        }}
      >
        <Grid container sx={{ width: "100%" }}>
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
      <Grid
        item
        md={3}
        sx={{ display: "grid", justifyContent: "end" }}
        sm={9}
        xs={9}
      >
        <Grid sx={{ display: { md: "grid", sm: "none", xs: "none" } }}>
          <Link href="/contact" className={styles.button}>
            <p style={{ margin: "10px" }}>Contact Us </p>
            <AiOutlineMail size="24px" />
          </Link>
        </Grid>
        <Grid
          sx={{
            display: { md: "none", sm: "grid", xs: "grid" },
            justifyContent: "end",
          }}
        >
          <RxHamburgerMenu size={24} onClick={handleClick} />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: {
            md: "none",
            sm: menuOpen ? "inline" : "none",
            xs: menuOpen ? "inline" : "none",
          },
          padding:"12px",
          margin:"24px"
        }}
      >
        <Grid item xs={12}>
          <a href="/" className={styles.navitems2}>
            About Us
          </a>
        </Grid>
        <Grid xs={12}>
          <Link href="/team" className={styles.navitems2}>
            Our Teams
          </Link>
        </Grid>
        <Grid xs={12}>
          <Link href="/news" className={styles.navitems2}>
            News
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
