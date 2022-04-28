import { Box } from "@mui/material";
import React from "react";
import InfoBox from "./InfoBox";

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  controller: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    padding: "8rem 1rem",
  },
};

// Set Default Box as info incase if anything goes wrong
const Controller = ({ currBox = "info" }) => {
  return <Box sx={styles.controller}>
    {currBox === "info" ? <InfoBox /> : "404"}
  </Box>;
};

export default Controller;

// Controller component will control the box changes on the quiz page
// boxes are like => the instructions box with some quiz information
// main quiz box
// confirmation box
// results box
// and already attempted box
// hope you got it :)


// Now lets create box system :)