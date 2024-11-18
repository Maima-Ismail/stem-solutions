/* eslint-disable quotes */
import React, { useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Carousel from "react-slick";
import PrevIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "next-i18next";
import Agency1 from "public/images/services/agency1.png";
import Agency2 from "public/images/services/agency2.png";
import Agency3 from "public/images/services/agency3.png";
import Agency4 from "public/images/services/agency4.png";
import Agency5 from "public/images/services/agency5.png";
import Agency6 from "public/images/services/agency6.png";
import Agency7 from "public/images/services/agency7.png";

import useStyles from "./services-style";
import TitleIcon from "../Title/WithIcon";
import Card from "../Cards/Default";
import DotsParallax from "../Parallax/Dots";

const servicesList = [
  {
    title: "Mobile App Development",
    desc: "Building high-performance mobile apps that captivate and engage users.",
    img: Agency2,
  },
  {
    title: "Web Development",
    desc: "Crafting visually stunning and functional websites that drive results.",
    img: Agency1,
  },
  {
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces that enhance user experience and reflect your brand.",
    img: Agency3,
  },
  {
    title: "Startup Solution",
    desc: "Tailored services to accelerate startup growth, from MVP development to efficient launch and scaling.",
    img: Agency7,
  },
  {
    title: "Custom Software Development",
    desc: "Delivering bespoke software solutions tailored to your specific business needs.",
    img: Agency4,
  },
  {
    title: "Marketing",
    desc: "Creating impactful marketing campaigns that elevate your brand and drive business growth.",
    img: Agency6,
  },
  {
    title: "SEO",
    desc: "Boosting your online visibility and driving traffic with expert SEO strategies.",
    img: Agency5,
  },
];

function Services() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes } = useStyles();
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (theme.direction === "ltr" && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(servicesList.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <DotsParallax />
      <div className={classes.carouselHandle}>
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Card
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  button={t("agency-landing.services_button")}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon
              text={t("agency-landing.services_title")}
              icon="apps"
              extended
            />
            <nav className={classes.arrow}>
              <Fab
                size="small"
                onClick={() => slider.current.slickNext()}
                aria-label="prev"
                className={classes.margin}
              >
                <PrevIcon />
              </Fab>
              <Fab
                size="small"
                onClick={() => slider.current.slickPrev()}
                aria-label="next"
                className={classes.margin}
              >
                <NextIcon />
              </Fab>
            </nav>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Services;
