import { Box } from "@mui/material";
import React from "react";
import InfoBox from "./InfoBox";

const styles = {
  controller: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    padding: "8rem 1rem"
  },
};

const Controller = ({ currBox }) => {
  return <Box sx={styles.controller}>
    {
      currBox === "info" ? <InfoBox /> : "404"
    }
  </Box>;
};

export default Controller;
