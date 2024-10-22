/* eslint-disable quote-props */
import React, { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import CaseCard from '../Cards/Case';
import useStyles from './case-study-style';
import useTitle from '../Title/title-style';

const categories = [
  'Centrefy-Healthcare Technology',
  'The Zensory-Wellness & Mindfulness',
  'NeuroPlan-The Brain Docs',
  'Xperience',
];

const projectData = {
  'Centrefy-Healthcare Technology': [
    {
      bg: '/images/projects/project11.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project12.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project13.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project14.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project15.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project16.png',
      size: 'big',
    },
    {
      bg: '/images/projects/project17.png',
      size: 'big',
    },
  ],
  'The Zensory-Wellness & Mindfulness': [
    {
      bg: '/images/projects/project21.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project22.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project23.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project24.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project25.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project26.png',
      size: 'big',
    },
    {
      bg: '/images/projects/project27.png',
      size: 'big',
    },
  ],
  'NeuroPlan-The Brain Docs': [
    {
      bg: '/images/projects/project31.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project32.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project33.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project34.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project35.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project36.png',
      size: 'big',
    },
    {
      bg: '/images/projects/project37.png',
      size: 'big',
    },
  ],
  Xperience: [
    {
      bg: '/images/projects/project41.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project42.png',
      size: 'small',
    },
    {
      bg: '/images/projects/project43.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project44.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project45.png',
      size: 'medium',
    },
    {
      bg: '/images/projects/project46.png',
      size: 'big',
    },
    {
      bg: '/images/projects/project47.png',
      size: 'big',
    },
  ],
};

function CaseStudies() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  // const { t } = useTranslation('common');

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const [selectedIndex, setSelectedIndex] = useState(
    'Centrefy-Healthcare Technology'
  );
  const [currentProjects, setCurrentProjects] = useState(
    projectData[selectedIndex]
  );

  function handleListItemClick(event, index) {
    console.log(index);
    setSelectedIndex(index);
    setCurrentProjects(projectData[index]);
  }

  function onMovePrevRequest() {
    setPhotoIndex(
      (photoIndex + currentProjects.length - 1) % currentProjects.length
    );
  }

  function onMoveNextRequest() {
    setPhotoIndex(
      (photoIndex + currentProjects.length + 1) % currentProjects.length
    );
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  const renderCard = (item, index) => (
    <CaseCard
      key={index.toString()}
      bg={item.bg || ''}
      size={item.size}
      simple={item.simple || false}
      openPopup={() => showPopup(index)}
    />
  );

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={
            currentProjects[photoIndex].bg || currentProjects[photoIndex].logo
          }
          nextSrc={
            currentProjects[(photoIndex + 1) % currentProjects.length].bg ||
            currentProjects[(photoIndex + 1) % currentProjects.length].logo
          }
          prevSrc={
            currentProjects[(photoIndex + 1) % currentProjects.length].logo ||
            null
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
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
                    <div style={{ height: '100%', width: '100%' }}>
                      {currentProjects.map((item, index) => {
                        if (item.size === 'small') {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
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
                      {currentProjects.map((item, index) => {
                        if (item.size === 'medium') {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
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
                      {currentProjects.map((item, index) => {
                        if (item.size === 'big') {
                          return renderCard(item, index);
                        }
                        return false;
                      })}
                    </div>
                  </ScrollAnimation>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CaseStudies;