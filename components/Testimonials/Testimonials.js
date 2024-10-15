import React, { useRef, useEffect, useState } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
// import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
// import TestimonialCard from '../Cards/Testimonial';
import TitleIcon from '../Title/WithIcon';
// import CompanyLogo from '../CompanyLogo';
import SquareParallax from '../Parallax/SingleSquare';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 3
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    rating: 4
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    rating: 5
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    rating: 4
  },
];

function Testimonials() {
  // Theme breakpoints
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { classes } = useStyle();

  // Translation function
  const { t } = useTranslation('common');

  // Carousel
  const sliderText = useRef(null);
  const sliderAvatar = useRef(null);
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null
  });
  useEffect(() => {
    setSlider({
      nav1: sliderText.current,
      nav2: sliderAvatar.current
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
    centerPadding: '2px',
    centerMode: true,
    autoplaySpeed: 5000,
    slidesToShow: 7,
    pauseOnHover: false,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
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
      </ScrollAnimation> */}
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
                <Carousel ref={sliderText} asNavFor={slider.nav2} {...settingsText}>
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
                    </div>
                  ))}
                </Carousel>
              </div>
            </Container>
            <div className={classes.carouselAvatar}>
              <Carousel ref={sliderAvatar} asNavFor={slider.nav1} {...settingsAvatar}>
                {testiContent.map((item, index) => (
                  <div className={classes.item} key={index.toString()}>
                    <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
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
            <TitleIcon text={t('agency-landing.testimonial_title')} icon="format_quote" />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Testimonials;
