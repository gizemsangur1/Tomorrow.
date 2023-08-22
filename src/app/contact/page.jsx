"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
const Message = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      res.status === 201 && location.reload();
    } catch (err) {
      setErr(true);
      console.log(err)
    }
  };

  return (
    <Grid container className={styles.container} onSubmit={handleSubmit}>
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
                <button className={styles.button} type="Submit">Send</button>
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

export default Message;
