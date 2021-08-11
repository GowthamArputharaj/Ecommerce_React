import React, { Component } from 'react';
import { connect } from 'react-redux';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import {  Grid } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';


// React Componoentns


// Images

const styles = (theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  Form: {
    width: '90%',
    margin: 'auto',
  },
  TextField: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#F2F3F7',
    fontSize: '15px',

    height: '1.8rem',
    padding: '1.8rem 1.8rem 1.8rem 1rem',
    borderRadius: '4px',

    border: '1px solid #e2e2e1',
    lineHeight: '2rem',

  },


});



// Redux
const mapStateToProps = (state) => ({
  coupon_code: state.shop.cart_coupon_code,
});

const mapDispatchToProps = {
  // 
}


class ApplyCoupon extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }

  render() {
    const {classes} = this.props;

    const coupon_code = this.props.coupon_code;

    document.querySelector('body').classList.remove('stop_scrolling');
    
    return (
      <div className={classes.root}>
        <Grid container className={classes.Form}>
          <Grid item xs={12} md={12}>
            <InputBase
              className={classes.TextField}
              placeholder="Apply Coupon"
              name="apply_coupon"
              value={coupon_code}
              // onChange={() => this.props.onChange(this.props.apply_coupon)}
              onChange={this.props.onChange}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ApplyCoupon));




