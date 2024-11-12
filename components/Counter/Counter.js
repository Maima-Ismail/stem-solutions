import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import counterStyles from './counter-style'; 
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Counter() {
  const { t } = useTranslation('common');
  const { classes } = counterStyles(); 
  const { classes: text } = useText();

  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" spacing={6}>
          <Grid xs={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <CountUp start={0} end={200} prefix="+" duration={2.5}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t('agency-landing.about_employee')}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid xs={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <CountUp start={0} end={500} prefix="+" duration={2.5}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t('agency-landing.about_projects')}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid xs={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h3" className={text.title}>
                  <CountUp start={0} end={300} prefix="+" duration={2.5}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </Typography>
                <Typography component="p" className={text.subtitle}>
                  {t('agency-landing.about_client')}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
