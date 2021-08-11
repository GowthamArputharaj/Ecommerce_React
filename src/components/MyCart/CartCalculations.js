import React, {Component} from 'react';
// import { connect } from 'react-redux';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


// React Componoentns


// Images


const styles = (theme) => ({
  CartCalculations: {
    padding: '0.5rem 0.5rem',
    // width: '95%',
    marginRight: '0.5%',
    marginLeft: '0.5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    marginBottom: '10vh',
  },
  cartValues: {
    backgroundColor: 'rgba(36,39,44, 0.06)',
    borderRadius: '12px',
    margin: 'auto',
    padding: '1rem',
  },
  nameLeft: {
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#24272C',
  },
  totalCartValue: {
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    textAlign: 'right',
    color: '#24272C',
  },
  savingValue: {
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '18px',
    textAlign: 'right',
    color: '#41AF66',
  },
  payableAmount: {
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#24272C',
  },
  incTax: {
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.5',
  },
  payableValue: {
    fontWeight: 'bold',
    fontSize: '19px',
    lineHeight: '22px',
    textAlign: 'right',
    color: '#24272C',
  },
  calcDescription: {
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '15px',
    color: '#000000',
    opacity: '0.5',
    marginLeft: '5%',
    
  },
  gridTextRight: {
    textAlign: 'right',
  },


});

// Redux

// const mapStateToProps = (state) => ({
//   cart_details: state.shop.cart_details,
//   cart_total_value: state.shop.cart_details.cart_total_value,
//   cart_saving_value: state.shop.cart_details.cart_saving_value,
//   cart_payable_value: state.shop.cart_details.cart_payable_value,
// });

// const mapDispatchToProps = {
//   // 
// };


class CartCalculations extends Component {

  render() {
    const {classes} = this.props;


    return (
      <div className={classes.CartCalculations}>
        <div className={classes.cartValues}>
          <Grid container direction="row" alignItems="center" justifyContent="space-around" >
            <Grid item xs={9} md={11} >
              <span className={classes.nameLeft}>Total Cart Value</span>
            </Grid>
            <Grid item xs={3} md={1} className={classes.gridTextRight}>
              {/* <span className={classes.totalCartValue}>₹{ this.props.cart_details.cart_total_value}</span> */}
              <span className={classes.totalCartValue}>₹{ this.props.cart_calculations.cart_total_value ? this.props.cart_calculations.cart_total_value : 0 }</span>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" justifyContent="space-around" style={{ marginTop: '0.5rem', }}>
            <Grid item xs={9} md={11} >
              <span className={classes.nameLeft}>You are Saving</span>
            </Grid>
            <Grid item xs={3} md={1} className={classes.gridTextRight} >
              {/* <span className={classes.savingValue}>₹{ this.props.cart_details.cart_saving_value}</span> */}
              <span className={classes.savingValue}>₹{ this.props.cart_calculations.cart_saving_value ? this.props.cart_calculations.cart_saving_value : 0 }</span>
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container direction="row" alignItems="center" justifyContent="space-around" >
            <Grid item xs={9} md={11} >
              <span className={classes.payableAmount}>Payable Amount</span><br></br>
              <span className={classes.incTax}>Including All taxes</span>
            </Grid>
            <Grid item xs={3} md={1} className={classes.gridTextRight} >
              {/* <span className={classes.payableValue}>₹{ this.props.cart_details.cart_payable_value}</span> */}
              <span className={classes.payableValue}>₹{ this.props.cart_calculations.cart_payable_value}</span>
            </Grid>
          </Grid>
        </div>
      
        <p className={classes.calcDescription}>
          You will recieve tax invoice at the time of delivery. <br></br>
          Delivery & other charges might be applicable
        </p>
      </div>
    )
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CartCalculations));
export default withStyles(styles)(CartCalculations);

// export default CartCalculations;





