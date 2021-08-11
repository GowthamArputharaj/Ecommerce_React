import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// Material UI Componenets
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { alpha, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// Files
// import logo_image from '../images/logo.jpg';

import logo_image from '../../images/logo_color.jpg';
import cart_svg from '../../images/cart_svg.svg';
import nav_search_svg from '../../images/nav_search_svg.svg';
import nav_btn_icon_svg from '../../images/nav_btn_icon_svg.svg';

// React Components
import SideMenu from './SideMenu';



const styles = (theme) => ({
  root: {
    // width: '100%',
    // height: '3.5rem',
    // position: 'sticky',
  },
  appbar: {
    color: "#24272C",
    backgroundColor: "white",
    position: 'fixed !important',
    top: '0',
    left: '1px',
    boxSizing: 'border-box',
    zIndex: '8',
    width: '100%',
    
    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '0px',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: '33.33vw !important',
      margin: 'auto',
      left: '0px',
    },

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  palette: {
    common: {
      white: '#fff',
    },
    color: 'grey',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  logo_image: {
    width: '83px',
    height: '62px',
  },
  gridContainer: {
    height: '64px !important',
    top: '0px',
    bottom: '0px',
    width: '100%',
  },
  logoGrid: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    // top: '50%',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
  badge: {
    borderRadius: '4px',
    marginLeft: '0rem',
    marginBottom: '1.1rem',
    width: '13px',
    height: '13px',
    background: '#24272C',
    fontSize: '10px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '13px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  backgroundBlur: {
    position: 'fixed',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100vh',
    background: 'rgba(36, 39, 44, 0.3)',
    backdropFilter: 'blur(10px)',
    zIndex: '9',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw',
      left: '33.33vw',
    },

  }
});

const mapStateToProps = (state) => ({
  total_cart_items: state.shop.cart_details.total_cart_items,
});


const mapDispatchToProps = (dispatch) => {
  return {
    // selectedAddress: () => dispatch({ type: 'GET_SELECTED_ADDRESS' }),
  }
};


class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      showSideMenu: false,
      total_cart_items: 0,
    });
  }

  componentDidMount() {
    this.setState({
      
    });
  }

  toggleSide = () => {
    this.setState({
      showSideMenu: !this.state.showSideMenu,
    });

    if(this.state.showSideMenu) {
      document.querySelector('body').classList.remove('stop_scrolling');
    } else {
      document.querySelector('body').classList.add('stop_scrolling');
    }
  }

  render() {

    const {classes} = this.props;
    const total_cart_items = this.props.total_cart_items;
    const selected_address = this.props.selected_address;

    return (
      <div className={classes.root} >
        <AppBar 
          // position="sticky"
          className={classes.appbar} 
          id="header" 
          >
          <Toolbar>
            {this.state.showSideMenu ?
              <>
                <div className={classes.backgroundBlur} tabIndex="0" role="button" onClick={this.toggleSide} >
                </div> 
                <SideMenu selected_address={selected_address} />
              </>
              :
              (
                <>
                  <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.gridContainer} >
                    <Grid item  >
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.toggleSide}
                      >
                        {/* <MenuIcon /> */}
                        <img src={nav_btn_icon_svg} alt="Nav"></img>
                      </IconButton>
                    </Grid>
                    <Grid item className={classes.logoGrid}>
                      <img src={logo_image} alt='Logo' className={classes.logo_image} />
                    </Grid>
                    <Grid item 
                      style={{ 
                        // position: 'absolute', 
                        right: '0px', 
                        }} 
                      >
                      <IconButton aria-label="search" color="inherit" >
                        <img src={nav_search_svg} alt="Search"></img>
                      </IconButton>
                      <Link to="/my-cart" style={{ textDecorationLine: 'none',}}>
                        <IconButton aria-label="search" color="inherit" >
                          <img src={cart_svg} alt="cart"></img>
                          <span overlap="rectangle" className={classes.badge} >
                            { total_cart_items }
                          </span>
                        </IconButton>
                      </Link>
                    </Grid>
                  </Grid>
                </>
              )
            }
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavigationBar));




