"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";

const Post = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const startId = 1; // Başlangıç ID
    const endId = 12; // Bitiş ID

    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        const filteredData = res.data.filter(
          (item) => item.id >= startId && item.id <= endId
        );
        console.log(filteredData);
        setData(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container className={styles.container} spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id} className={styles.flipcard}>
          <Link href={`/news/${item.id}`} key={item.id}>
            <Grid className={styles.flipcardinner}>
              <Grid className={styles.newscard}>
                <Typography className={styles.title}>{item.title}</Typography>
              </Grid>
              <Grid
                item
                className={styles.newscardback}
                sx={{
                  backgroundImage: `url(${item.url})`,
                  backgroundSize: "cover",
                }}
              ></Grid>
            </Grid>{" "}
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Post;
