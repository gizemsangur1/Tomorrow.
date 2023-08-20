import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
async function getData(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json(); // Parse the response JSON
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}
async function getPost(id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        cache: "no-store",
      }
    );
    const post = await res.json(); // Parse the response JSON
    return post;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

const Post = async ({ params }) => {
  const data = await getData(params.id);

  // Check if data exists before accessing its properties
  if (!data) {
    return <div>Error loading data</div>;
  }
  const post = await getPost(params.id);

  // Check if data exists before accessing its properties
  if (!data) {
    return <div>Error loading data</div>;
  }

  return (
    <Grid container className={styles.container} spacing={3}>
      <Grid item sm={12} md={3} className={styles.image} sx={{ display: { sm: "grid",xs:"grid", md: "none" }}}>
        <img src={data.url} style={{ width: "40vh",borderRadius:"16px" }} />
      </Grid>
      <Grid item sm={12} md={9} className={styles.item}>
        <Typography className={styles.title}>{data.title}</Typography>
        <Grid className={styles.line}></Grid>
        <Grid className={styles.bodydiv}>
          <Typography className={styles.body}>{post.body}</Typography>
          <Typography className={styles.body}>{post.body}</Typography>
        </Grid>
      </Grid>
      <Grid item sm={12} md={3} className={styles.image} sx={{ display: { sm: "none",xs:"none", md: "grid" }}}>
        <img src={data.url} style={{ width: "40vh",borderRadius:"16px" }} />
      </Grid>
    </Grid>
  );
};

export default Post;
