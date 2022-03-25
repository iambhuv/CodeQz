import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";
import styles from "../../../styles/Home.module.scss";
import Tilt from "react-parallax-tilt";

const QuizListItem = () => {
  return (
    <Tilt className={styles.quiz_list_item} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
      <ButtonBase className={styles.quiz_list_item_inner} sx={{ boxShadow: 2, ":hover": { boxShadow: 6 }, ".MuiTouchRipple-child": { background: "#29343f" } }}>
        <Typography className={styles.quiz_title}>Javascript Mock Test</Typography>
        <Typography className={styles.quiz_description}>Javascript Interview Questions Quiz</Typography>
        <Typography className={styles.quiz_time_box}>
          Time :- <span className="text_highlight">10</span> mins
        </Typography>
      </ButtonBase>
    </Tilt>
    // <Box>QuizListItem</Box>
  );
};

export default QuizListItem;
