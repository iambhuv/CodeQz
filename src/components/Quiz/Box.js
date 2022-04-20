import { Box as MUIBox, LinearProgress } from "@mui/material";
import React from "react";
import styles from "../../../styles/Quiz/Box.module.scss";

const Box = ({ children, loading = false, ...others }) => {
  return (
    <MUIBox className={styles.box} {...others}>
      {loading && <LinearProgress className={styles.loader} />}
      <MUIBox sx={loading ? { opacity: 0.45, pointerEvents: "none", userSelect: "none" } : {}} {...{ "aria-disabled": loading }}>
        {children}
      </MUIBox>
    </MUIBox>
  );
};

export default Box;
