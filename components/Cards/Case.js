import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import useStyles from './cards-style';

function Case(props) {
  const { classes, cx } = useStyles();
  const { bg, title, desc, size, simple, openPopup } = props;
  const setSize = (sizeProp) => {
    switch (sizeProp) {
      case 'small':
        return classes.small;
      case 'big':
        return classes.big;
      default:
        return classes.medium;
    }
  };
  return (
    <ButtonBase
      className={cx(classes.caseCard, setSize(size))}
      focusRipple
      onClick={openPopup}
    >
      <span>
        <img
          src={bg}
          alt="img"
          className={classes.figure}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
      </span>
      <span className={cx(classes.property, simple && classes.fullHide)}>
        <span className={classes.title}>
          <Typography component="span" className={classes.title}>
            {title}
          </Typography>
        </span>
        <Typography component="span" className={classes.desc}>
          {desc}
        </Typography>
      </span>
    </ButtonBase>
  );
}

Case.propTypes = {
  bg: PropTypes.string,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  simple: PropTypes.bool,
  openPopup: PropTypes.func,
};

Case.defaultProps = {
  bg: '',
  size: 'medium',
  simple: false,
  openPopup: () => {},
};

export default Case;
