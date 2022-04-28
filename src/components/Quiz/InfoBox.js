import React from "react";
import Box from "./Box";
import styles from "../../../styles/Quiz/Box.module.scss";
import { Stack, Tooltip, Typography } from "@mui/material";
import Button from "./Button";

const InfoBox = () => {
  return (
    <Box>
      <Typography className={styles.title}>Quiz Information</Typography>
      <ol className={styles.info_list}>
        <li className={styles.info_list_item}>
          This quiz contains <span className="text_highlight">25</span> questions
        </li>
        <li className={styles.info_list_item}>
          Each question carry <span className="text_highlight">4</span> marks
        </li>
        <li className={styles.info_list_item}>
          Each wrong answer will get <span className="text_highlight">1</span> negative mark
        </li>
        <li className={styles.info_list_item}>
          You will get <span className="text_highlight">30</span> minutes
        </li>
        <li className={styles.info_list_item}>
          You can only attempt quiz once in <span className="text_highlight">24</span> hours after quiz get published
        </li>
        <li className={styles.info_list_item}>Try to score more in less time to get in leaderboard</li>
      </ol>
      <Stack className={styles.btns}>
        <Button variant="contained" className={styles.btn}>Start Quiz</Button>
        <Tooltip title='Go Back'>
        <Button variant="outlined" color="error" className={styles.btn_sm}><i className="fa-light fa-arrow-left-to-line"></i></Button>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default InfoBox;

// Yes we will build a leaderboard soon :)
// dont forget about admin panel XD
// so must subscribe to get those videos
// lets fix the button background thing! we will create custom button component 