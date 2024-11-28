/* eslint-disable quotes */
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CaseCard from "../Cards/Case";
import useStyles from "./case-study-style";
import useTitle from "../Title/title-style";

const categories = [
  "NeuroPlan-The Brain Docs",
  "The Zensory-Wellness & Mindfulness",
  "Xperience",
  "Centrefy-Healthcare Technology",
];

const pdfLinks = {
  "Centrefy-Healthcare Technology": "/portfolio/Centrefy.pdf",
  "The Zensory-Wellness & Mindfulness": "/portfolio/Zansory.pdf",
  "NeuroPlan-The Brain Docs": "/portfolio/NeuroPlan.pdf",
  Xperience: "/portfolio/Xperience.pdf",
};

const projectData = {
  "Centrefy-Healthcare Technology": [
    {
      bg: "/images/projects/project11.png",
      size: "small",
    },
    {
      bg: "/images/projects/project12.png",
      size: "small",
    },
    {
      bg: "/images/projects/project13.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project14.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project15.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project16.png",
      size: "big",
    },
    {
      bg: "/images/projects/project17.png",
      size: "big",
    },
  ],
  "The Zensory-Wellness & Mindfulness": [
    {
      bg: "/images/projects/project21.png",
      size: "small",
    },
    {
      bg: "/images/projects/project22.png",
      size: "small",
    },
    {
      bg: "/images/projects/project23.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project24.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project25.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project26.png",
      size: "big",
    },
    {
      bg: "/images/projects/project27.png",
      size: "big",
    },
  ],
  "NeuroPlan-The Brain Docs": [
    {
      bg: "/images/projects/project31.png",
      size: "small",
    },
    {
      bg: "/images/projects/project32.png",
      size: "small",
    },
    {
      bg: "/images/projects/project33.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project34.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project35.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project36.png",
      size: "big",
    },
    {
      bg: "/images/projects/project37.png",
      size: "big",
    },
  ],
  Xperience: [
    {
      bg: "/images/projects/project41.png",
      size: "small",
    },
    {
      bg: "/images/projects/project42.png",
      size: "small",
    },
    {
      bg: "/images/projects/project43.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project44.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project45.png",
      size: "medium",
    },
    {
      bg: "/images/projects/project46.png",
      size: "big",
    },
    {
      bg: "/images/projects/project47.png",
      size: "big",
    },
  ],
};

function CaseStudies() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const [selectedIndex, setSelectedIndex] = useState("NeuroPlan-The Brain Docs");
  
  const [currentProjects, setCurrentProjects] = useState(
    projectData[selectedIndex]
  );

  function handleListItemClick(event, item) {
    setSelectedIndex(item);
    setCurrentProjects(projectData[item]);
  }

  function showPopup() {
    const url = pdfLinks[selectedIndex];
    setPdfUrl(url);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const renderCard = (item, index) => (
    <CaseCard
      key={index.toString()}
      bg={item.bg || ""}
      size={item.size}
      simple={item.simple || false}
      openPopup={showPopup}
    />
  );

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={3} xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={-100}
              delay={200}
              duration={0.3}
            >
              <div>
                <Typography variant="h4" className={title.primary}>
                  Our Projects
                </Typography>
                <List component="nav">
                  {categories.map((item, index) => (
                    <ListItem
                      button
                      key={index.toString()}
                      className={cx(
                        classes.filter,
                        selectedIndex === item && classes.active
                      )}
                      onClick={(event) => handleListItemClick(event, item)}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item md={9} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={3}>
                <Grid item sm={5}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={200}
                    duration={0.4}
                  >
                    <div style={{ height: "100%", width: "100%" }}>
                      {currentProjects.map(
                        (item, index) =>
                          item.size === "small" && renderCard(item, index)
                      )}
                    </div>
                  </ScrollAnimation>
                </Grid>
                <Grid item sm={4}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={400}
                    duration={0.4}
                  >
                    <div>
                      {currentProjects.map(
                        (item, index) =>
                          item.size === "medium" && renderCard(item, index)
                      )}
                    </div>
                  </ScrollAnimation>
                </Grid>
                <Grid item sm={3}>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-100}
                    delay={600}
                    duration={0.4}
                  >
                    <div>
                      {currentProjects.map(
                        (item, index) =>
                          item.size === "big" && renderCard(item, index)
                      )}
                    </div>
                  </ScrollAnimation>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Modal for PDF */}
      <Dialog onClose={handleClose} open={open} fullScreen>
        <DialogContent style={{height: '100%', display: 'flex', flexDirection: 'column' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: "absolute", right: 16, top: 8, color: theme.palette.text.primary }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: "none", flexGrow: 1, marginTop: 30 }}
            title="PDF Document"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CaseStudies;
