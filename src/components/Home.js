import { Box, ButtonBase, TextField, Tooltip } from "@mui/material";
import React from "react";
import styles from "../../styles/Home.module.scss";
import { Search as SearchIcon } from "@mui/icons-material";
import QuizList from "./Home/QuizList";

const Home = () => {
  return (
    <Box className={styles.home}>
      <Box className={styles.inner_container}>
        <Box className={styles.search_box}>
          <TextField
            className={styles.search_input}
            label="Search Quiz.."
            color="secondary"
            variant="filled"
            fullWidth
            sx={{
              ".MuiFilledInput-root": {
                background: "#1e29339c",
              },
            }}
          />
          <Tooltip title="Search">
            <ButtonBase className={styles.search_btn}>
              <SearchIcon fontSize="medium" />
            </ButtonBase>
          </Tooltip>
        </Box>
        <QuizList />
      </Box>
    </Box>
  );
};

export default Home;
