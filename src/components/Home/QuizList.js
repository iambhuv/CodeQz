import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../../../styles/Home.module.scss";
import QuizListItem from "./QuizListItem";

const QuizList = () => {
  return (
    <Box className={styles.quiz_list_wrapper}>
      <Typography component="h1" className={styles.quiz_list_title}>
        Recent Quizzes
      </Typography>
      <Box className={styles.quiz_list}>
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
        <QuizListItem />
      </Box>
    </Box>
  );
};

export default QuizList;