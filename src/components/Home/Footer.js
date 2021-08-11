import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// Material UI Components
import Paper from '@material-ui/core/Paper';
import { Grid, withStyles } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { ListItem } from '@material-ui/core';

// React Components

// Images

// All styles here..
const styles = (theme) => ({
  footerPaper: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#FFFFFF',
    borderRadius: '0px',
    background: '#24272C',
    boxShadow: '0px -2px 14px rgba(0, 0, 0, 0.3)',

    position: 'fixed',
    bottom: '0',
    height: '3.5rem',
    width: '100%',
    margin: 'auto',

    boxSizing: 'border-box',

    [theme.breakpoints.up('md')]: {
      width: '33.33vw',
      margin: 'auto',
    },

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
    },

    zIndex: '2',
  },
  footerPaperGrid: {

    paddingTop: '1rem',
    // marginTop: '1rem',
    width: '90%',
    margin: 'auto',
  },
  priceItems: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    padding: '0px',
    margin: '0px',
  },
  placeOrderList: {
    padding: '0px',
    margin: '0px',
  },
  price: {
    // fontSize: '1rem',
  },
  item: {
    // fontSize: '0.8rem',
  },
  arrowUp: {
    // marginTop: '5px',
    fontSize: '25px',
    color: 'white',
    margin: '0px',
    // padding: '0px',
  },
  arrowRight: {
    // marginTop: '0px',
    fontSize: '25px',
    color: 'white',
    margin: '0px',
    // padding: '0px',
  }
});


// Redux

const mapStateToProps = (state) => ({
  cart_details: state.shop.cart_details,
  total_cart_items: state.shop.cart_details.total_cart_items,
  cart_payable_value: state.shop.cart_details.cart_payable_value,
});

const mapDispatchToProps = {
  // 
}


// Footer Field
class Footer extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Paper
        component="form"
        className={classes.footerPaper}
        id="footer"
      >
        {/* <Grid container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={12} md={6}> */}
        <div className={classes.footerPaperGrid} >
          <Grid container
            direction="row"
            alignItems="center"
            // justifyContent="space-between"
            justifyContent="center"
          >
            <Grid item xs={6} sm={6} md={7}>
              <ListItem className={classes.priceItems}>
                <span className={classes.price}><b>₹ {this.props.cart_calculations.cart_payable_value ? this.props.cart_calculations.cart_payable_value : 0}</b></span>
                <span className={classes.item}>&nbsp;| {this.props.cart_calculations.total_cart_items ? this.props.cart_calculations.total_cart_items : 0} items </span>
                <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
              </ListItem>
            </Grid>
            <Grid item xs={6} sm={6} md={5}>
              <Link
                to="/my-address"
                style={{ textDecorationLine: 'none', color: 'white', }}
              >
                <ListItem className={classes.placeOrderList}>
                  &emsp;&emsp;Place Order<KeyboardArrowRight ></KeyboardArrowRight>
                </ListItem></Link>
            </Grid>
          </Grid>
        </div>

        {/* </Grid>
        </Grid> */}
      </Paper>
    )
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Footer));

