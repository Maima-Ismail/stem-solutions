import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const testiStyles = makeStyles({ uniqId: 'testimonial' })((theme, _params, classes) => ({
  root: {
    width: '100%',
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    position: 'relative',
    padding: theme.spacing(10, 0),
    minHeight: 800,
    [theme.breakpoints.down('lg')]: {
      minHeight: 600,
      paddingTop: theme.spacing(15),
    },
    paddingTop: theme.spacing(20)
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center'
  },
  content: {
    fontStyle: 'italic',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-10),
    },
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-8),
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.secondary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35
        },
        '& button': {
          opacity: 0
        }
      }
    }
  },
  name: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  carouselText: {
    [`& .${classes.item}`]: {
      position: 'relative'
    }
  },
  carouselAvatar: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 768,
    },
    [`& .${classes.item}`]: {
      cursor: 'pointer',
      height: 140,
      paddingTop: theme.spacing(2)
    },
    '& div[class*="slick-center"]': {
      [`& .${classes.avatar}`]: {
        opacity: 1,
        transform: 'scale(1.4)'
      }
    }
  },
  avatar: {
    border: '4px solid white',
    width: 80,
    height: 80,
    margin: '0 auto',
    opacity: 0.7,
    transition: 'all 0.3s ease'
  },
  item: {
    padding: theme.spacing(2),
    '&:focus': {
      outline: 'none'
    }
  },
  title: {
    '& h3': {
      left: 150,
      [theme.breakpoints.down('xl')]: {
        left: 150,
      },
      [theme.breakpoints.down('lg')]: {
        left: 0,
      },
    },
  },
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10),
    },
    [theme.breakpoints.up('xl')]: {
      left: theme.spacing(10),
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('lg')]: {
        marginRight: theme.spacing(5),
        float: 'right',
      },
      [theme.breakpoints.up('xl')]: {
        marginRight: theme.spacing(-5)
      },
    }
  },
  itemPropsFirst: {
    width: theme.direction === 'rtl' ? 450 : 160,
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 160 : 350,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
