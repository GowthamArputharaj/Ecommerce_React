import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {getSelectedAddress} from '../../actions';



// Material UI Components
import { withStyles } from '@material-ui/core';
import {  Grid } from '@material-ui/core';


// React Components

// Images


const styles = (theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    width: '100%',
    margin: 'auto',
  },
  AddressDiv: {
    width: '90%',
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '1rem',
    border: 'none',
    boxShadox: 'none',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#24272C',
  },
  name: {
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#24272C',
  },
  address_value: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#000000',
    opacity: '0.7',
  },
  phone: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#000000',
    opacity: '0.7',
  },
});


// Redux
const mapStateToProps = (state) => ({
  addresses: state.shop.addresses,
});

// const mapDispatchToProps = {
//   getSelectedAddress: getSelectedAddress(),
// }

const mapDispatchToProps = (dispatch) => ({
  // 
})



class Address extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }


  render() {
    const {classes} = this.props;

    var selected_address = '';
    this.props.addresses.map((address, index) => {
      if(address.isSelected === true) {
        selected_address = address;
      }
      return null;
    });

    if(selected_address.id === 0) {
      selected_address = this.props.addresses[0];
    }

    return (
      <div className={classes.root}>
        <div className={classes.AddressDiv}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" >
            <Grid item xs={12}>
              <span className={classes.title}>Deliver to:</span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.name}>{selected_address.name}</span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.address_value}>{selected_address.address_value}</span>
            </Grid>
            <Grid item xs={12}>
              <span className={classes.phone}>{selected_address.phone}</span>
            </Grid>
          </Grid>
        </div>
      </div>
    )
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Address));
