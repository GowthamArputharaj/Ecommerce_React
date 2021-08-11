import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewAddress, unSelectAllAddressPreference } from '../../actions/index.js';

// Material UI Components
import { Button, Grid, Slide, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

import Checkbox from '@material-ui/core/Checkbox';




// React Componoentns


// Images
import place_order_footer_svg from '../../images/place_order_footer_svg.svg';



const styles = (theme) => ({
  root: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    width: '100%',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    zIndex: '10',
    // marginTop: '20vh',
    fontFamily: 'Roboto',

    
    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
      height: '80vh',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',
      height: '80vh',
    },

    overflowY: 'scroll',
  },
  Form: {
    width: '90%',
    paddingBottom: '20vh',
    paddingTop: '5vh',

    // height: '100%',
    margin: 'auto',
    marginTop: '1rem',
    
    [theme.breakpoints.only('sm')]: {
      paddingBottom: '10vh',
    },
    
    [theme.breakpoints.up('md')]: {
      paddingBottom: '10vh',
    },
  },
  addNewAddress: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
  },
  inputPaper: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#F2F3F7',
    border: 'none',
    marginTop: '3rem',
    boxSizing: 'border-box',
  },
  TextField: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#F2F3F7',

    // fontSize: '1.1rem',
    fontSize: '15px',

    height: '1.8rem',
    padding: '1.8rem 1.8rem 1.8rem 1rem',
    borderRadius: '4px',

    border: '1px solid #e2e2e1',
    lineHeight: '2rem',

  },
  RedditTextField: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#F2F3F7',
  },
  checkBx: {
    color: '#24272C',
    fill: '#24272C',
  },
  ckboxText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '17px',
    color: '#000000',
    opacity: '0.7',
  },
});

const stylesReddit = (theme) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#F2F3F7',
  },
});


// Redux
const mapStateToProps = (state) => ({
  addresses: state.shop.addresses,
});

const mapDispatchToProps = {
  addNewAddress,
  unSelectAllAddressPreference,
};



class RedditTextField extends Component {
  render() {
    const { classes } = this.props;
    return <TextField InputProps={{ classes, disableUnderline: true }} {...this.props} />;
  }
}

class NewAddress extends Component {
  constructor(props) {
    super(props);

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.toggleFormCheckbox = this.toggleFormCheckbox.bind(this);
    this.submitNewAddressForm = this.submitNewAddressForm.bind(this);

    this.state = ({
      fullName: '',
      houseNo: '',
      streetLocality: '',
      city: '',
      pincode: '',
      isSelected: true,
      saveForOtherShop: true,
      // houseNo: 'L1051',
      // streetLocality: 'F-7',
    });
  }

  handleFormFieldChange(e) {
    var fieldName = e.target.name;
    var fieldValue = e.target.value;

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  toggleFormCheckbox(e) {
    var fieldName = e.target.name;
    var fieldValue = null;
    if(fieldName === 'isSelected') {
      fieldValue = !this.state.isSelected;
    }
    if(fieldName === 'saveForOtherShop') {
      fieldValue = !this.state.saveForOtherShop;
    }

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  submitNewAddressForm() {
    
    if(this.state.isSelected === true) {
      this.props.unSelectAllAddressPreference();
    }

    var newAddress = {};
    newAddress.name = this.state.fullName;
    newAddress.houseNo = this.state.houseNo;
    newAddress.streetLocality = this.state.streetLocality;
    newAddress.city = this.state.city;
    newAddress.address_value = `${this.state.houseNo}, ${this.state.streetLocality}, ${this.state.city}, ${this.state.pincode}.`;
    newAddress.pincode = this.state.pincode;
    newAddress.isSelected = this.state.isSelected;
    newAddress.saveForOtherShop = this.state.fullsaveForOtherShop;

    this.props.addNewAddress(newAddress);

    this.props.toggleSide();
  }

  render() {

    const { classes } = this.props;

    document.querySelector('body').classList.remove('stop_scrolling');

    return (
      <div className={classes.root} >
        <Slide direction="up" in={true} mountOnEnter timeout={800} >
          <div className={classes.Slide}>
            <Grid container className={classes.Form}>
              <Grid item xs={12} md={12}>
                <span className={classes.addNewAddress}>Add New Address</span>
              </Grid>
              <Grid item xs={12} md={12}>
                <InputBase
                  className={classes.TextField}
                  placeholder="Full Name"
                  name="fullName"
                  onChange={this.handleFormFieldChange}
                  value={this.state.fullName}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <RedditTextField
                  label="Flat / House No."
                  variant="filled"
                  id="houseNo"
                  className={classes.RedditTextField}
                  name="houseNo"
                  onChange={this.handleFormFieldChange}
                  value={this.state.houseNo}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <RedditTextField
                  label="Street Locality"
                  variant="filled"
                  id="streetLocality"
                  className={classes.RedditTextField}
                  name="streetLocality"
                  onChange={this.handleFormFieldChange}
                  value={this.state.streetLocality}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <InputBase
                  className={classes.TextField}
                  placeholder="City"
                  name="city"
                  onChange={this.handleFormFieldChange}
                  value={this.state.city}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <InputBase
                  className={classes.TextField}
                  placeholder="pincode"
                  name="pincode"
                  onChange={this.handleFormFieldChange}
                  value={this.state.pincode}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container style={{ marginTop: '1rem', }} alignItems="center"  >
                  <Grid item xs={2} md={2}>
                    <Checkbox 
                      className={classes.checkBx} 
                      style={{ color: '#24272C', }} 
                      name="isSelected" 
                      checked={this.state.isSelected}
                      onChange={this.toggleFormCheckbox}
                      
                    />
                  </Grid>
                  <Grid item xs={10} md={10}  >
                    <span className={classes.ckboxText} >Set the address as default</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container alignItems="center"  >
                  <Grid item xs={2} md={2}>
                    <Checkbox
                      className={classes.checkBx}
                      style={{ color: '#24272C', }}
                      name="saveForOtherShop"
                      checked={this.state.saveForOtherShop}
                      onChange={this.toggleFormCheckbox}

                    />
                  </Grid>
                  <Grid item xs={10} md={10}  >
                    <span className={classes.ckboxText} ><br></br>Save the address details for other shops powered by easysocial.io</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container alignItems="center" justifyContent="space-between" style={{ marginTop: '2rem', }} >
                  <Grid item xs={8} md={8}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: '#24272C', color: 'white', }}
                      onClick={this.submitNewAddressForm}
                    >
                      Save Address &ensp; <img src={place_order_footer_svg} alt="Go"  ></img>
                    </Button>
                  </Grid>
                  <Grid item xs={4} md={4}  >
                    <Button variant="text" onClick={this.props.toggleSide} >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Slide>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, stylesReddit)(NewAddress));





