import React, { Component } from 'react';
import { connect } from 'react-redux';
import { customizeProduct } from '../../actions/index.js';

// Material UI Components
import { Button, Grid, Slide, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import { green, grey } from '@material-ui/core/colors';

import VegNonvegIcon from './VegNonvegIcon.js';


// React Componoentns


// Images
import place_order_footer_svg from '../../images/place_order_footer_svg.svg';
import { TrafficRounded } from '@material-ui/icons';



const styles = (theme) => ({
  root: {
    position: 'fixed',
    left: '0px',
    bottom: '0px',
    width: '100%',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'yellow',
    padding: '1rem',
    boxSizing: 'border-box',
    zIndex: '10',
    // marginTop: '20vh',
    fontFamily: 'Roboto',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',


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
  close: {
    float: 'right',
    marginRight: '1rem',
    // marginTop: '1rem',
  },
  Form: {
    width: '100%',
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
    // backgroundColor: 'blue',
  },
  addAddProduct: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
  },
});


const GreyRadio = withStyles({
  root: {
    color: grey[800],
    '&$checked': {
      color: grey[900],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);



// Redux
const mapStateToProps = (state) => ({
  addresses: state.shop.addresses,
  customize_products: state.shop.customize_products,
});

const mapDispatchToProps = {
  customizeProduct,
};


class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.submitAddProductForm = this.submitAddProductForm.bind(this);
    this.toggleFormRadio = this.toggleFormRadio.bind(this);
    this.toggleFormCheckbox = this.toggleFormCheckbox.bind(this);

    this.state = ({
      
    });
  }

  handleFormFieldChange(e) {
    var fieldName = e.target.name;
    var fieldValue = e.target.value;

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  toggleFormRadio(e) {
    var fieldName = e.target.name;
    var fieldValue = null;

    // var product = null;
    
    this.props.customizeProduct();

    // if (fieldName === 'isSelected') {
    //   fieldValue = !this.state.isSelected;
    // }
    // if (fieldName === 'saveForOtherShop') {
    //   fieldValue = !this.state.saveForOtherShop;
    // }

    this.setState({
      [fieldName]: fieldValue,
    })
  }


  toggleFormCheckbox(e) {
    var fieldName = e.target.name;
    var fieldValue = null;

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  submitAddProductForm() {

    if (this.state.isSelected === true) {
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

    this.props.addAddProduct(newAddress);

    this.props.toggleSide();
  }

  render() {

    const { classes } = this.props;

    // console.log(this.state.customize_categories);

    // const customize_category = this.state.customize_categories[0];
    const customize_category = this.props.customize_products[0];

    console.log(customize_category);

    document.querySelector('body').classList.remove('stop_scrolling');

    return (
      <div className={classes.root} >

        <Slide direction="up" in={true} mountOnEnter timeout={800} >
          <div className={classes.Slide}>
            <Grid container className={classes.Form}>
              <Grid item xs={12} md={12}>
              
                <Grid item xs={12} md={12}>
                  <span className={classes.close} onClick={this.props.toggleSide}>
                    <CloseIcon />
                  </span>
                  <span className={classes.addAddProduct}>Customize {customize_category['product_name']}</span>
                </Grid>
                {
                  customize_category.categories.map((categories, index) => {
                    return (
                      <div key={index}>
                        <h4>{categories.category_title}</h4>
                        {
                          categories.choices.map((category, ind) => {
                            return (
                              <Grid item xs={12} md={12} key={ind}>
                                <span style={{ marginTop: '1rem !important',  paddingTop: '1rem !important' }}>
                                  <VegNonvegIcon isVeg={category.is_veg}  ></VegNonvegIcon>
                                </span>
                                {
                                  categories.is_multi_selectable === false ? (
                                    <GreyRadio
                                      checked={category.isSelected}
                                      onChange={this.toggleFormRadio}
                                      value="b"
                                      name="hello"
                                      inputProps={{ 'aria-label': 'B' }}
                                      style={{ padding: '0px !important'}}
                                    />
                                  ) : (
                                    <Checkbox
                                      checked={category.isSelected}
                                      onChange={this.toggleFormCheckbox}
                                      // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                      style = {{ color: 'black', }}
                                    />
                                  )
                                }
                                <span>
                                  { category.title }
                                </span>
                                &emsp;
                                <span>
                                  ₹{ category.price }
                                </span>
                              </Grid>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </Grid>
              <Grid item xs={12} md={12}>
                <Grid container alignItems="center" justifyContent="space-between" style={{ marginTop: '2rem', }} >
                  <Grid item xs={8} md={8}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ backgroundColor: '#24272C', color: 'white', }}
                      onClick={this.submitAddProductForm}
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProduct));





