import React, { useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Banner from '../../public/images/banner.jpg';
import useStyles from './banner-style';

function VideoBanner() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation function
  const { t } = useTranslation('common');

  // Youtube player
  const { classes, cx } = useStyles();

  useEffect(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  // const _onEnd = event => {
  //   event.target.playVideo();
  // };

  // const _onPlay = () => {
  //   const curTime = player[0].getCurrentTime();
  //   if (curTime > 0) {
  //     setPlayed(true);
  //     setPlayedCtrl(true);
  //   }
  // };

  // const _onReady = event => {
  //   player.push(event.target);
  //   setPlayer(player);
  // };

  // const _onTogglePause = () => {
  //   setPlayedCtrl(!playCtrl);
  //   if (playCtrl) {
  //     player[0].pauseVideo();
  //   } else {
  //     player[0].playVideo();
  //   }
  // };

  // const opts = {
  //   height: '720',
  //   width: '1080',
  //   playerVars: { // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //     controls: 0,
  //     rel: 0,
  //     showinfo: 0,
  //     mute: 1,
  //     origin: 'http://localhost:3001'
  //   }
  // };

  return (
    <div className={classes.heroContent}>
      {isMobile && (
        <figure className={classes.mobileCover}>
          <img src={Banner} alt="cover" />
        </figure>
      )}

      <Container>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography variant="h3" className={cx(classes.textHelper, text.title)}>
                  {t('agency-landing.banner_title')}
                </Typography>
              </div>
              <Typography className={cx(classes.subtitle, text.subtitle)} variant="h5">
                {t('agency-landing.banner_subtitle')}
              </Typography>
              <Button variant="outlined" size="large" href='/contact' color="secondary" className={classes.button}>
                {t('agency-landing.banner_button')}
                <SendIcon className={classes.icon} />
              </Button>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.videoWrap}>
              <div className={classes.videoFigure}>
                <div className={classes.innerFigure}>
                  <img src={Banner} alt="banner" />
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default VideoBanner;
