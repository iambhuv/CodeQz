import { Box, TextField } from "@mui/material";
import React from "react";
import styles from "../../styles/Home.module.scss";

const Home = () => {
  return (
    <Box className={styles.home}>
      <Box className={styles.inner_container}>
        <TextField className={styles.search_input} label="Search Quiz.." color="secondary" fullWidth />
      </Box>
    </Box>
  );
};

export default Home;
