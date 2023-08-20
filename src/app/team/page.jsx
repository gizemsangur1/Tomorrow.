"use client";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";

const Team = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const startId = 1; // Başlangıç ID
    const endId = 5; // Bitiş ID

    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        setUser(res.data); 
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container className={styles.container}>
      {user.map((item) => (
        <Grid key={item.id}> 
            <img src={item.image}/>
          <Typography>{item.employee_name}</Typography>
          <Typography>{item.department}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Team;