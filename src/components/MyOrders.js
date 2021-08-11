import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


// React Componoentns
import CartCalculations from './MyOrder/CartCalculations';
import ApplyCoupon from './MyOrder/ApplyCoupon';
import Address from './MyOrder/Address';

// Images
import my_cart_header_back_svg from '../images/my_cart_header_back_svg.svg';
import { connect } from 'react-redux';



const styles = (theme) => ({
  Header: {
    height: '10vh',
    backgroundColor: '#FFFFFF',
    fontStyle: 'normal',
    position: 'fixed',
    top: '0px', 
    left: '0px',
    width: '100%',
    zIndex: '8',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',
    },


    boxSizing: 'border-box',

  },
  headerTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
    position: 'absolute',
    transform: 'translate(15%, 130%)',
  },
  headerDescription: {
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.5',
  },
  Address: {
    marginTop: '1rem',
  },
  ApplyCoupon: {

  },
  CartCalculations: {
    marginTop: '1rem',
  },
  PlaceOrderDiv: {
    width: '100%',
    margin: 'auto',
    marginBottom: '20vh',
    textAlign: 'center',
    marginTop: '1rem',
  },
  PlaceOrderButton: {
    margin: 'auto',
    boxSizing: 'border-box',
    backgroundColor: '#24272C',
    color: '#FFFFFF',
  },
  placeOrder: {
    padding: '0px',
    margin: '0px',
  },
});


// Redux
const mapStateToProps = (state) => ({
  cart_details: state.shop.cart_details,
});

const mapDispatchToProps = {
  // 
}



class MyCart extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      cart_calculations: {
        cart_total_value: 1924,
        cart_saving_value: 282,
        cart_coupon_saving_value: 100,
        cart_shipping_value: 282,
        cart_payable_value: 1624,
      },
      total_cart_qty: 12,
      coupon_value: '',
      address: {
        id: 1,
        name: 'Saurabh Sharma',
        isPreferredAddress: true,
        address_value: 'F-74, Suresh Marg, CScheme, Jaipur, 302001',
        phone: '9560355887'
      },
    });

  };

  onCouponChange = (e) => {
    this.setState({
      coupon_value: e.target.value,
    });
  }


  render() {
    document.querySelector('body').classList.remove('stop_scrolling');
    const { classes } = this.props;

    const cart_details = this.props.cart_details;


    return (
      <div>
        <div className={classes.Header}>
          <span className={classes.headerTitle}>
            <Link to="/home" style={{ textDecorationLine: 'none', }}>
              <img src={my_cart_header_back_svg} alt="Back"></img>
            </Link>
            &ensp;Order Now
            <span className={classes.headerDescription}>&ensp;{cart_details.total_cart_items} items</span>
          </span>
        </div>
        <div style={{ marginTop: '18vh',  }} >
          <div className={classes.Address}>
            <Address />
          </div>
          <div className={classes.ApplyCoupon}>
            <ApplyCoupon onChange={(val) => this.onCouponChange(val)} />
          </div>
          <div className={classes.CartCalculations}>
            <CartCalculations />
          </div>
          <div className={classes.PlaceOrderDiv}>
            <Button variant="contained" className={classes.PlaceOrderButton} >
              <Link to="/home" style={{ textDecorationLine: 'none', color: 'white', }}>
                <ListItem className={classes.placeOrder}>
                  Place Order<KeyboardArrowRight ></KeyboardArrowRight>
                </ListItem>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyCart));

// export default MyCart;





