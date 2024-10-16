/* eslint-disable quotes */
import React, { useRef, useEffect, useState } from "react";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Carousel from "react-slick";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "next-i18next";
import imgAPI from "public/images/imgAPI";
import TitleIcon from "../Title/WithIcon";
import SquareParallax from "../Parallax/SingleSquare";
import useStyle from "./testi-style";

const testiContent = [
  {
    text: 'Working with Stem Solutions Limited was a game changer for our business. Their team developed a custom web application that streamlined our operations, and increased our efficiency by over 30%. Their understanding of our needs and attention to detail made all the difference',
    avatar: imgAPI.avatar[10],
    title: 'Xperience',
    rating: 5,
  },
  {
    text: 'The mobile app developed by Stem Solutions Limited (SSL) exceeded our expectations. They took our ideas and transformed them into a user-friendly app that our customers love.',
    avatar: imgAPI.avatar[1],
    title: 'Neuroplan',
    rating: 4,
  },
  {
    text: 'Thanks to SSL, our app is not just functional but truly delightful to use. Their expertise and creativity have significantly improved our customer engagement and satisfaction.',
    avatar: imgAPI.avatar[2],
    title: 'The Zensory',
    rating: 4,
  },
  {
    text: 'The platform SSL built has become central to our business. They paid attention to every detail, making it both functional and enjoyable for our customers. Their passion for their work really shows.',
    avatar: imgAPI.avatar[3],
    title: 'Centrefy',
    rating: 3,
  },
];

function Testimonials() {
  const { classes } = useStyle();
  const { t } = useTranslation("common");

  const sliderText = useRef(null);
  const sliderAvatar = useRef(null);
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null,
  });
  useEffect(() => {
    setSlider({
      nav1: sliderText.current,
      nav2: sliderAvatar.current,
    });
  }, []);

  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
  };

  const settingsAvatar = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: "2px",
    centerMode: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          width={20}
          height={20}
          src={i < rating ? '/icons/star.png' : '/icons/star-outline.png'}
          alt={i < rating ? 'Star Icon' : 'Star Outline Icon'}
          className="w-5 h-5"
        />
      );
    }
    return stars;
  };

  return (
    <div className={classes.root}>
      <SquareParallax />
      {/* <ScrollAnimation
        animateOnce
        animateIn="fadeInUpShort"
        offset={-50}
        delay={300}
        duration={0.5}
      >
        <div>
          <TitleIcon text={t('agency-landing.testimonial_title')} icon="app" extended />
        </div>
      </ScrollAnimation>  */}
      <div className={classes.carouselWrap}>
        <ScrollAnimation
          animateOnce
          animateIn="fadeInUpShort"
          offset={-150}
          delay={400}
          duration={0.5}
        >
          <div>
            <Container maxWidth="sm">
              <div className={classes.carouselText}>
                <Carousel
                  ref={sliderText}
                  asNavFor={slider.nav2}
                  {...settingsText}
                >
                  {testiContent.map((item, index) => (
                    <div className={classes.item} key={index.toString()}>
                      <Typography className={classes.content}>
                        {item.text}
                      </Typography>
                      <Typography className={classes.name}>
                        <strong>{item.name}</strong>
                        &nbsp;-&nbsp;
                        {item.title}
                      </Typography>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          marginTop: '8px',
                        }}
                      >
                        {renderStars(item.rating)}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Container>
            <div className={classes.carouselAvatar}>
              <Carousel
                ref={sliderAvatar}
                asNavFor={slider.nav1}
                {...settingsAvatar}
              >
                {testiContent.map((item, index) => (
                  <div className={classes.item} key={index.toString()}>
                    <Avatar
                      alt={item.name}
                      src={item.avatar}
                      className={classes.avatar}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div className={classes.title}>
            <TitleIcon
              text={t("agency-landing.testimonial_title")}
              icon="format_quote"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonials;
