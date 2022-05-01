import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Alert.module.scss";
import Button from "./Quiz/Button";
import { hide as hideAlert } from "../redux/reducers/alert";

const Alert = () => {
  const [closing, setClosing] = useState(false);
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      // Will close now
      // This will reset the state and shown will become false and will be removed from DOM

      setClosing(false);
      dispatch(hideAlert());
    }, 100);
  };

  const handleOk = () => {
    // Clicking on ok button will run close too by default
    handleClose();
  };

  useEffect(() => {
    const esc_close_alert = (ke) => {
      if (ke.key === "Escape") handleClose();
    };
    window.addEventListener("keyup", esc_close_alert);

    () => {
      window.removeEventListener("keyup", esc_close_alert);
    };
  }, []);

  return (
    alert?.shown && (
      <div className={[styles.alert_container, closing ? styles.alert_container_closing : null].join(" ")} onClick={handleClose}>
        <div
          className={[styles.alert_box, closing ? styles.alert_box_closing : null].join(" ")}
          onClick={(e) => {
            // This is used for like when we click on background it will trigger handleClose but not on clicking on the button or any other its children *its the default behaviour so we can disable it with stopPropagation :)*
            e.stopPropagation();
          }}
        >
          <span className={styles.alert_title}>{alert.title}</span>
          <IconButton className={styles.close_alert} color="secondary" onClick={handleClose}>
            <i className="fa-light fa-xmark"></i>
          </IconButton>
          <span className={styles.alert_text}>{alert.text}</span>
          <Button variant="contained" className={styles.alert_okay} onClick={handleOk}>
            Okay
          </Button>
        </div>
      </div>
    )
  );
};

export default Alert;

// okay so thats all for today :)
// dont forget to checkout github for source code. link in description