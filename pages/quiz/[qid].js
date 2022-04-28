import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Controller from "../../src/components/Quiz/Controller";

const QuizPage = () => {
  const [currBox, setCurrBox] = useState("");
  const router = useRouter();

  // for now we dont have to do anything with this query, but we will use it later :)
  const query = router.query?.qid;

  useEffect(() => {
    // Hence when the page is loaded firstly only info box will show!, user can navigate to next box thru buttons
    setCurrBox("info");
  }, []);

  return <Controller currBox={currBox} />;
};

export default QuizPage;
