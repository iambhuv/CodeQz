import { Box, ButtonBase, TextField, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import { Search as SearchIcon } from "@mui/icons-material";
import QuizList from "./Home/QuizList";
import { useDispatch } from "react-redux";
import { show as showAlert } from "../redux/reducers/alert";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(showAlert("Haha First Alert"));

      setTimeout(() => {
        dispatch(showAlert("Haha Second Alert"));

        setTimeout(() => {
          dispatch(showAlert("Haha Third Alert"));
        }, 1000);
      }, 800);
    }, 500);
  }, []);

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
            <ButtonBase
              className={styles.search_btn}
              onClick={() => {
                // Will trigger alert here just for testing
                dispatch(showAlert({ title: "Testing :)", text: "Hola" }));
              }}
            >
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
