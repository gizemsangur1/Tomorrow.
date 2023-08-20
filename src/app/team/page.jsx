"use client";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Image from "next/image";
const teams = [
  {
    id: 1,
    title: "Web Development",
    member: ["Lorelai Gilmore", "Luke Danes", "Kirk Gleason"],
    url:["/woman.jpg","/man.jpg","/man.jpg"]
  },
  {
    id: 2,
    title: "3D Design",
    member: ["Jake Peralta", "Amy Santiago"],
    url:["/man.jpg","/woman.jpg"]
  },
  {
    id: 3,
    title: "Digital Marketing",
    member: ["Hannibal Lecter", "Will Graham"],
    url:["/man.jpg","/man.jpg"]
  },
  {
    id: 4,
    title: "Product Design",
    member: ["Billy Loomis", "Stu Matcher"],
    url:["/man.jpg","/man.jpg"]
  },
  {
    id: 5,
    title: "Web Design",
    member: ["Sidney Prescot", "Gale Weather", "Dewey Riley"],
    url:["/woman.jpg","/woman.jpg","/man.jpg"]
  },
  {
    id: 6,
    title: "Illustrations",
    member: ["Christopher Hayden"],
    url:["/man.jpg"]
  },
];
const Team = () => {
  return (
    <Grid container className={styles.container} >
      {teams.map((item) => (
        <Grid container direction="row" spacing={3} >
          <Grid item md={2} sm={12}  sx={{display:"grid",justifyContent:{md:"start",sm:"center"},alignItems:"center",margin:{md:"0px",sm:"10px"}}}>
            <h1>{item.title} </h1>
            <Grid className={styles.line}></Grid>
          </Grid>
          <Grid item md={10} sm={12} sx={{display:"grid",justifyContent:"center",alignItems:"center",marginBottom:"5px"}}>
            <Grid container spacing={3}>
            {item.member.map((member, index) => (
                <Grid item key={member} sx={{display:"grid",justifyContent:"center",alignItems:"center",margin:"10px"}}>
                  <Grid sx={{display:"grid",justifyContent:"center",alignItems:"center"}}>
                   <img src={item.url[index]} alt={`Image of ${member}`} style={{width:"10vh",margin:"2px"}}/>
                  </Grid>
                  <h2>{member}</h2>
                </Grid>
              ))}
            </Grid>
            
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Team;
