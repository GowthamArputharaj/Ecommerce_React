import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, removeAllProductQuantityFromCart } from '../../../actions/index.js';


// Material ui component
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ListItem, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import '@fontsource/roboto';


// React Componenets
import ProductQuantityVarieties from './ProductQuantityVarieties.js';

// Images
import amul_cool from '../../../images/amul_cool.jpg';


const styles = (theme) => ({
  product: {
    
    padding: '0.5rem 0.5rem',
    width: '95%',
    // paddingRight: '0px',
    // marginRight: '0px',
    // marginLeft: '0px',
    margin: 'auto',
  },
  gridContainer: {
    width: '100%',
    boxSizing: 'border-box',
  },
  gridImage: {
    // 
  },
  gridDetails: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  gridAddButton: {},
  productImage: {
    // position: 'absolute',
    width: '80px',
    height: '80px',
    // left: '24px',
    left: '1rem',

    // top: '380px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
  productTitle: {
    margin: '5px 0px 0px 0px',

    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    fontStyle: 'normal',

    color: '#000000',
  },
  productQuantity: {
    margin: '0px 0px 0px 0px',

    fontSize: '14px',
    lineHeight: '16px',
    color: '#24272C',
    fontWeight: '900',

    textDecoration: 'underline',

  },
  placeOrderList: {
    marginLeft: '0px',
    paddingLeft: '0px',
    marginTop: '5px',
  },
  reducedPrice: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#28333F',
  },
  originalPrice: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#28333F',
  },
  discountPercentage: {
    background: '#41AF66',
    borderRadius: '4px',
    padding: '2px',
    margin: '5px 0px 0px 0px',

    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  },
  addButton: {
    // position: 'absolute',
    width: '6rem',
    height: '36px',
    top: '15%',
    // right: '-5%',
    marginRight: '0%',
    marginLeft: '9%',

    background: '#FFFFFF',
    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    // padding: '0px', 
    // margin: '0px',
  },
  background_blur: {
    backgroundColor: 'rgba(36, 39, 44, 0.3)',
    // minWidth: '100%',
    // minHeight: '100vh',
    width: '100%',
    height: '100vh',
    zIndex: '9',
    // position: 'absolute',
    position: 'fixed',
    top: '0px',
    left: '0px',
    backdropFilter: 'blur(3px)',
    margin: 'auto',
    boxSizing: 'border-box',
    [theme.breakpoints.up('md')]: {
      width: '33.33vw',
      margin: 'auto',
      left: '33.33vw',
    },
    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },
  },
  addButtonZero: {
    width: '6rem',
    height: '36px',
    top: '15%',
    marginRight: '0%',

    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    background: '#FFFFFF',
  },
  addButtonNotZero: {
    width: '6rem',
    height: '36px',
    top: '15%',
    marginRight: '0%',

    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    background: '#24272C', color: '#FFFFFF',
    padding: '0px',
  },
  iconWhite: {
    fill: '#FFFFFF',
    fontSize: '1.2rem',
    color: '#FFFFFF',
  },
});

// Redux
const mapStateToProps = (state, props) => ({
  category: state.shop.categories.filter(cat => cat.id === props.category_id)[0],
  cart_details: state.shop.cart_details,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  removeAllProductQuantityFromCart,
};


class Product extends Component {
  constructor(props) {
    super(props);

    this.handleVarietiesVisibility = this.handleVarietiesVisibility.bind(this);
    this.handleVarietyAddToCart = this.handleVarietyAddToCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);

    this.state = ({
      product: this.props.product,
      // hasQuantityVariety: false,
      openVariety: false,
    });

  }


  handleVarietiesVisibility() {
    // console.log(!this.state.openVariety);
    if(this.props.product.available_quantity.length > 1) {
      this.setState({
        openVariety: !this.state.openVariety,
      });
      if (this.state.openVariety === true) {
        // console.log('remove');
        document.querySelector('body').classList.remove('stop_scrolling');
      } else {
        // console.log('add');
        document.querySelector('body').classList.add('stop_scrolling');
      }
    }
  }

  handleVarietyAddToCart(variety_id) {

    this.props.removeAllProductQuantityFromCart(this.state.product.id);
    this.props.addToCart(this.state.product.id, variety_id);

    this.handleVarietiesVisibility();
  }

  handleAddToCart(product_variety_id) {
    this.props.addToCart(this.state.product.id, product_variety_id);
  }

  handleRemoveFromCart(product_variety_id) {
    this.props.removeFromCart(this.state.product.id, product_variety_id);
  }



  render() {
    const { classes } = this.props;

    var selectedProductQuantity;
    var category = this.props.category;

    // PRODUCT
    const product = category.products.filter(prod => prod.id === this.props.product.id)[0];

    // PRODUCT QUANTITY
    selectedProductQuantity = product.available_quantity.filter((prod) => {
      if(prod.isSelected === true) {
        return true;
      } else {
        return false;
      }
    });
    if(selectedProductQuantity.length > 0) {
      selectedProductQuantity = selectedProductQuantity[0];
    } else {
      selectedProductQuantity = this.props.product.available_quantity[0];
    }

    return (
      <div className={classes.product}>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          justifyContent="flex-start"
          className={classes.gridContainer}
          spacing={0}

        >
          <Grid item xs={4} sm={3} md={3} className={classes.gridImage}>
            <Paper component="form" className={classes.productImage}  >
              <img src={amul_cool} alt='alt' ></img>
            </Paper>
          </Grid>
          <Grid item xs={8} sm={9} md={9} style={{}} className={classes.gridDetails}>
            <Typography  >
              <b className={classes.reducedPrice}>₹ {selectedProductQuantity.selling_price}</b>&ensp;
              {selectedProductQuantity.actual_price !== selectedProductQuantity.selling_price ? (
                <span>
                  <strike className={classes.originalPrice}>₹ {selectedProductQuantity.actual_price}</strike>&ensp;
                </span>
              ) : (
                <></>
              )
              }
              {
                selectedProductQuantity.tags.map((tag, index) => {
                  return (
                    <span key={index}>
                      <span variant="text" className={classes.discountPercentage}>{tag}</span>&ensp;
                    </span>
                  )
                })
              }
            </Typography>
            <Typography className={classes.productTitle} >{this.state.product.name}</Typography>
            <Grid container direction="row" alignItems="center" justifyContent="center"  >
              <Grid item xs={5} sm={5} md={7}  >
                <ListItem className={classes.placeOrderList} >
                  <span 
                    className={classes.productQuantity} 
                    style={{ marginLeft: '0px', paddingLeft: '0px' }} 
                    onClick={this.handleVarietiesVisibility}
                    >
                    {selectedProductQuantity.qty}
                  </span>
                  <span>
                    <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                  </span>
                </ListItem>
              </Grid>
              <Grid item xs={7} sm={7} md={5} style={{ textAlign: 'right', }} >
                {selectedProductQuantity.cart_qty !== 0 ? (
                  <button className={classes.addButtonNotZero}>
                    <Grid container alignItems="center" >
                      <Grid item xs={4} >
                        <RemoveIcon className={classes.iconWhite} onClick={() => this.handleRemoveFromCart(selectedProductQuantity.id)} />
                      </Grid>
                      <Grid item xs={4} >
                        <span style={{ marginTop: '1rem', }}>
                          {selectedProductQuantity.cart_qty}
                        </span>
                      </Grid>
                      <Grid item xs={4} >
                        <AddIcon className={classes.iconWhite} onClick={() => this.handleAddToCart(selectedProductQuantity.id)} />
                      </Grid>
                    </Grid>
                  </button>
                ) : (
                  <Button variant="outlined" className={classes.addButtonZero} onClick={() => this.handleAddToCart(selectedProductQuantity.id)} >
                    Add
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
        {
          (product.available_quantity.length > 1 && this.state.openVariety === true) ? (
            <>
              <div role="button" onClick={() => this.handleVarietiesVisibility(false)} className={classes.background_blur}>
              </div>
              <ProductQuantityVarieties
                varieties={product.available_quantity}
                product_id={product.id}
                category_id={this.props.category_id}
                title={product.name}
                className={classes.ProductQuantityVarieties}
                onCloseClick={this.handleVarietiesVisibility}
                onVarietyAddButton={this.handleVarietyAddToCart}

              />
            </>
          ) : (
            <></>
          )
        }
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Product));
