import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';

function Services(props) {
  const { classes } = useStyles();
  const {
    img,
    title,
    desc,
    button
  } = props;
  return (
    <Paper className={classes.defaultCard}>
      <figure>
        <img src={img} alt="img" />
      </figure>
      <div className={classes.text}>
        <Typography display="block" variant="h6">{title}</Typography>
        <Typography component="p">{desc}</Typography>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        {button}
      </Button>
    </Paper>
  );
}

Services.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default Services;
