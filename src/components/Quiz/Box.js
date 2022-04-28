import React from "react";
// Now If we import mui box directly it will conflict with each other so we will import mui box as MUIBox
import { Box as MUIBox, LinearProgress } from "@mui/material";
import styles from "../../../styles/Quiz/Box.module.scss";
// if you are'nt getting suggestion for scss/css files then use an plugin/extension => Path Intellisense by christian kohler

const Box = ({ loading = false, children, ...others }) => {
  return (
    <MUIBox className={styles.box} {...others}>
      {loading && <LinearProgress className={styles.loader} />}
      <MUIBox sx={loading ? { opacity: 0.4, userSelect: "none", pointerEvents: "none" } : {}}>{children}</MUIBox>
    </MUIBox>
  );
};

export default Box;

// Lets create stylesheet for our box
// Now!! This is an template box we will use it to create other boxes
// now time to create loader
// for main page, like whenever route changes, *your navigates to another page and it is not loaded already*, time for this!
// and for the box too :)
// lets do box one firstly, we will use it later 
