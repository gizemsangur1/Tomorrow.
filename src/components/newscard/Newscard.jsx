"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
const Newscard = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setData(res.data); 
      })
      .catch((err) => console.log(err));
    setData([]);
  }, []);

  return (
    <Grid container className={styles.container}>
    
        <Grid className={styles.newscard}>
          <Typography>{props.title}</Typography>
        </Grid>
  
    </Grid>
  );
};

export default Newscard;
