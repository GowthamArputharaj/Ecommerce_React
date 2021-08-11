import React, { Component } from 'react';
import { connect } from 'react-redux';
import { customizeProduct, addCustomizeProductToCart } from '../../actions/index.js';
import { Link } from 'react-router-dom';

// Material UI Components
import { Button, Grid, Slide, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

import Paper from '@material-ui/core/Paper';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { ListItem } from '@material-ui/core';

import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';
import { green, grey } from '@material-ui/core/colors';

import VegNonvegIconAP from './VegNonvegIconAP.js';


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
  footerPaper: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#FFFFFF',
    borderRadius: '0px',
    background: '#24272C',
    boxShadow: '0px -2px 14px rgba(0, 0, 0, 0.3)',

    // position: 'fixed',
    // bottom: '0',
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
  cart_details: state.shop.cart_details,
  total_cart_items: state.shop.cart_details.total_cart_items,
  cart_payable_value: state.shop.cart_details.cart_payable_value,
  customize_products_calculation: state.shop.customize_products_calculation,
});

const mapDispatchToProps = {
  customizeProduct,
  addCustomizeProductToCart,
};


class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.submitAddProductForm = this.submitAddProductForm.bind(this);
    this.toggleFormRadio = this.toggleFormRadio.bind(this);
    this.toggleFormCheckbox = this.toggleFormCheckbox.bind(this);

    this.state = ({
      product_id: this.props.product_id,
      asdf: true,
      i: 0,
      total_price: 0,
    });
  }

  handleFormFieldChange(e) {
    var fieldName = e.target.name;
    var fieldValue = e.target.value;

    this.setState({
      [fieldName]: fieldValue,
    })
  }

  // toggleFormRadio(category_id, choice_id) {
  toggleFormRadio(e) {
    
    var ar = e.target.value.split('_');

    var category_id = ar[0];
    var choice_id = ar[1];

    var product = this.props.customize_products.filter(prod => prod.product_id == this.props.product_id)[0];

    product = product.categories.map((category, c_i) => {
      if(category.id == category_id) {
        category.choices.map((choice, ch_i) => {

          if(choice.id == choice_id) {
            choice.isSelected = !choice.isSelected;
          } else {
            choice.isSelected = false;
          }
          return choice;

        });
      }
      return category;
    });

    this.props.customizeProduct(product, this.props.product_id);
  }


  toggleFormCheckbox(e) {
    
    var ar = e.target.value.split('_');

    var category_id = ar[0];
    var choice_id = ar[1];

    var product = this.props.customize_products.filter(prod => prod.product_id == this.props.product_id)[0];

    product = product.categories.map((category, c_i) => {
      if(category.id == category_id) {
        category.choices.map((choice, ch_i) => {

          if(choice.id == choice_id) {
            choice.isSelected = !choice.isSelected;
          }
          return choice;

        });
      }
      return category;
    });

    this.props.customizeProduct(product, this.props.product_id);
  }

  submitAddProductForm() {
    var customize_category = this.props.customize_products.filter((prod) => prod.product_id == this.props.product_id );

    if(customize_category.length > 0) {
      customize_category = customize_category[0];
    }

    console.log(customize_category.total);

    this.props.addCustomizeProductToCart(customize_category.total);
    this.props.toggleSide();
    
  }

  render() {

    const { classes } = this.props;
    
    // console.log(this.props.customize_products);
    // console.log('this.props.customize_products');

    // var customize_category1 = this.props.customize_products;
    var customize_category1 = this.props.customize_products.filter((prod) => prod.product_id == this.props.product_id );

    if(customize_category1.length > 0) {
      customize_category1 = customize_category1[0];
    }
    
    var customize_category = this.props.customize_products[0];

    customize_category = customize_category1;
    const TOTAL = customize_category.total;

    // this.setState({
    //   total_price: TOTAL,
    // });
    // this.total_price = TOTAL;
    
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
                  customize_category.categories.map((category, index) => {
                    return (
                      <div key={index}>
                        <h4>{category.category_title}</h4>
                        {
                          category.choices.map((choice, ind) => {
                            return (
                              <Grid item xs={12} md={12} key={ind}>
                                <span style={{ marginTop: '1rem !important', paddingTop: '1rem !important' }}>
                                  <VegNonvegIconAP isVeg={choice.is_veg}  ></VegNonvegIconAP>
                                </span>
                                {
                                  category.is_multi_selectable === false ? (
                                    <GreyRadio
                                      checked={choice.isSelected}
                                      // onClick={this.toggleFormRadio(category.id, choice.id)}
                                      onClick={this.toggleFormRadio}
                                      value={category.id + '_' + choice.id}
                                      name="choice"
                                      inputProps={{ 'aria-label': 'B' }}
                                      style={{ padding: '0px !important' }}
                                    />
                                  ) : (
                                    <Checkbox
                                      checked={choice.isSelected}
                                      onClick={this.toggleFormCheckbox}
                                      value={category.id + '_' + choice.id}
                                      // inputProps={{ 'aria-label': 'secondary checkbox' }}
                                      style={{ color: 'black', }}
                                    />
                                  )
                                }
                                <span>
                                  {choice.title}
                                </span>
                                &emsp;
                                <span>
                                  ₹{choice.price}
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

              <Paper
                component="form"
                className={classes.footerPaper}
                id="footer1"
              >

                <div className={classes.footerPaperGrid} >
                  <Grid container
                    direction="row"
                    alignItems="center"
                    // justifyContent="space-between"
                    justifyContent="center"
                  >
                    <Grid item xs={6} sm={6} md={7}>
                      <ListItem className={classes.priceItems}>
                        <span className={classes.item}>Item Total:&nbsp;</span>
                        <span className={classes.price}><b>₹ {TOTAL ? TOTAL : 0}</b></span>
                      </ListItem>
                    </Grid>
                    <Grid item xs={6} sm={6} md={5}>
                      {/* <Link
                        to="/my-address"
                        style={{ textDecorationLine: 'none', color: 'white', }}
                      > */}
                        <ListItem className={classes.placeOrderList} onClick={this.submitAddProductForm}>
                          &emsp;&emsp;Add this item<KeyboardArrowRight ></KeyboardArrowRight>
                        </ListItem>
                        {/* </Link> */}
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </div>
        </Slide>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProduct));





