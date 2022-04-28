import { Button as MUIButton, styled } from "@mui/material";

const Button = styled(MUIButton)(({ theme: { palette }, variant }) => {
  return variant === "contained"
    ? {
        background: palette.primary.dark,
        padding: ".4rem 1rem",
        fontWeight: "normal",
        borderRadius: ".2rem",
        lineHeight: 1.6,
        ":hover": {
          background: "#1752a0f1",
        },
        "& .MuiTouchRipple-child": {
          background: "#112949e3 !important",
        },
      }
    : {};
});

export default Button;
