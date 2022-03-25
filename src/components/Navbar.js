import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <Box className={styles.navbar} sx={{ boxShadow: 5 }}>
      <Typography className={styles.logo}>
        <Link href="/">CodeQz</Link>
      </Typography>
    </Box>
  );
};

export default Navbar;
