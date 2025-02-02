import React, { useState, useEffect } from "react";
import axios from "axios";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  FormControl,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import "./Result.css";
import Modal from "../Modal/Modal";
import PdfDownloader from "../Pdf/PdfDownloader.js";
import { Link } from "react-router-dom";

import { Button } from "gestalt";
import "gestalt/dist/gestalt.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPen } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000,
    margin: "auto",
  },
  scroll: {
    overflow: "auto",
    height: "500px",
    whitespace: "pre-wrap",
  },
}));

const Result = ({ pk, title, topic, writer, parties, date, meeting_date }) => {
  const [script, setScript] = useState("아직 없음");
  const [modalScript, setModalScript] = useState("아직 없음");
  const [summary, setSummary] = useState("아직 없음");
  const [keywords, setKeywords] = useState("아직 없음");
  const [url, setUrl] = useState("");
  const [summaryUrl, setSummaryUrl] = useState("");

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const pen = <FontAwesomeIcon icon="fa-solid fa-pen" />;

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleScriptChange = (event) => {
    setScript(event.target.value);
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
  };

  const handleChange2 = (event) => {
    setScript(event.target.value);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const renderResult = async () => {
    await axios
      .get(url)
      .then((response) => {
        setScript(response.data.script);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    await axios
      .get(summaryUrl)
      .then((response) => {
        setSummary(response.data.summary);
        setKeywords(response.data.keyword);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };

  useEffect(() => {
    setUrl(`/testapp/result/${pk}`);
    setSummaryUrl(`/testapp/summary/${pk}`);
    renderResult();
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Scripts" {...a11yProps(0)} />
          <Tab label="Summary" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.scroll}
        >
          <Link
            className="result_pen"
            to={{
              pathname: `/minute/script/update/${pk}/`,
              state: {
                originalScript: script,
                pk: pk,
              },
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </Link>
          {script}
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.scroll}
        >
          {keywords}
          <br />
          <br />
          {summary}
        </TabPanel>
      </SwipeableViews>
      <br />
      <PdfDownloader
        title={title}
        topic={topic}
        writer={writer}
        parties={parties}
        date={date}
        meeting_date={meeting_date}
        summary={summary}
        keyword={keywords}
      />
    </div>
  );
};
export default Result;