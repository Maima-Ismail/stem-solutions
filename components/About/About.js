import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from 'theme/common';
import AboutImage from '../../public/images/banner.jpg';
import TitleDeco from '../Title/WithDecoration';
import useStyles from './about-style';
import useTitle from '../Title/title-style';
import Counter from '../Counter';

function About() {
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation function
  const { t } = useTranslation('common');

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={isDesktop ? 6 : 2}>
          <Grid item md={5} xs={12}>
            <div className={align.textCenter}>
              <TitleDeco bg={AboutImage} text={t('agency-landing.about_title')} />
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography className={cx(title.default, text.subtitle)} variant="h4">
              {t('agency-landing.about_subtitle')}
            </Typography>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
