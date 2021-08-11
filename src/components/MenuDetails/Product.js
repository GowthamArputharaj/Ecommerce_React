import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, removeAllProductQuantityFromCart } from '../../actions/index.js';


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
import VegNonvegIcon from './VegNonvegIcon.js';
import AddProduct from './AddProduct.js';

// Images
import amul_cool from '../../images/amul_cool.jpg';
import pizza1 from '../../images/pizza1.jpg';
import pizza2 from '../../images/pizza2.jpg';
import pizza3 from '../../images/pizza3.jpg';


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
    // width: '80px',
    // height: '80px',
    width: '120px',
    height: '100px',
    // left: '24px',
    left: '1rem',

    // top: '380px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    boxSizing: 'border-box',
    backgroundColor: 'yellow',
  },
  productTitle: {
    // margin: '5px 0px 0px 0px',

    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '18px',
    fontStyle: 'normal',

    color: '#000000',
  },
  productDescription: {
    // margin: '5px 0px 0px 0px',
    opacity: '0.5',

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
    opacity: '0.5',
  },
  discountPercentage: {
    color: '#FFFFFF',
    // background: '#41AF66',
    background: '#7B8AA2',
    padding: '2px',
    margin: '5px 0px 0px 0px',
    // marginBottom: '32rem',

    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
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
    "&:hover": {
      background: '#24272C', 
      color: '#FFFFFF',
      border: '2px solid white',
    }
  },
  addButtonNotZero: {
    width: '6rem',
    height: '36px',
    top: '15%',
    marginRight: '0%',

    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    background: '#24272C', 
    color: '#FFFFFF',
    padding: '0px',
    border: '2px solid white',
  },
  iconWhite: {
    fill: '#FFFFFF',
    fontSize: '1.2rem',
    color: '#FFFFFF',
  },
  backgroundBlur: {
    backgroundColor: 'rgba(36, 39, 44, 0.3)',
    width: '100vw',
    height: '100vh',
    zIndex: '9',
    position: 'fixed',
    top: '0px',
    left: '0px',
    backdropFilter: 'blur(3px)',
    margin: 'auto',
    boxSizing: 'border-box',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',

      height: '80vh',
    },
    
  }
});

// Redux
const mapStateToProps = (state, props) => ({
  category: state.shop.categories.filter(cat => cat.id === props.category_id)[0],
  cart_details: state.shop.cart_details,
  customize_products_calculation: state.shop.customize_products_calculation,
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
    this.toggleShowAddProductSide = this.toggleShowAddProductSide.bind(this);

    this.state = ({
      product: this.props.product,
      openVariety: false,
      showAddProduct: false,
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


  toggleShowAddProductSide = () => {
    this.setState({
      showAddProduct: !this.state.showAddProduct,
    });

    if (this.state.showAddProduct) {
      document.querySelector('body').classList.remove('stop_scrolling');
    } else {
      document.querySelector('body').classList.add('stop_scrolling');
    }
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
          {this.state.showAddProduct ?
          <>
            <div className={classes.backgroundBlur} tabIndex="0" role="button" onClick={this.toggleShowAddProductSide}>
            </div>
            <AddProduct toggleSide={this.toggleShowAddProductSide} product_id={product.id} />
          </>
          :
          (
            <>

            </>
          )
        }
        <Grid
          container
          direction="row"
          alignItems="stretch"
          justifyContent="flex-start"
          className={classes.gridContainer}
          spacing={0}

        >
          <Grid item xs={8} sm={8} md={9} style={{}} className={classes.gridDetails}>
            <span>
              <span style={{ width: '2rem', boxSizing: 'border-box', position: 'absolute', transform: 'translate(0%, 10%)', }}>
                <VegNonvegIcon isVeg={product.is_veg} ></VegNonvegIcon>
              </span>
              <span style={{ 
                  marginLeft: '1.5rem',
                }}>
                {
                  selectedProductQuantity.tags.map((tag, index) => {
                    return (
                      <span key={index} >
                        <span variant="text" className={classes.discountPercentage}>{tag}</span>&ensp;
                      </span>
                    )
                  })
                }
              </span>
            </span>
            <Typography className={classes.productTitle} style={{ marginTop: '0.5rem', }}  ><b>Pizza el caprino</b></Typography>
            <Typography className={classes.productDescription} style={{ marginTop: '0.5rem', }}  >
              {product.description}
            </Typography>
            <Typography style={{ marginTop: '0.5rem', }} >
              <b className={classes.reducedPrice}>₹ {selectedProductQuantity.selling_price}</b>&ensp;
              {selectedProductQuantity.actual_price !== selectedProductQuantity.selling_price ? (
                <span>
                  <strike className={classes.originalPrice}>₹ {selectedProductQuantity.actual_price}</strike>&ensp;
                </span>
              ) : (
                <></>
              )
              }
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={3} className={classes.gridImage}>
            <Paper component="form" className={classes.productImage}  >
              <img src={pizza1} alt='alt' width="100%"></img>
            </Paper>
            <div style={{
              // backgroundColor: 'white',
              margin: 'auto',
              transform: 'translate(10%, -20%)',
              // marginLeft: '0.4rem',
            }}>
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
                <Button variant="outlined" className={classes.addButtonZero} onClick={() => this.toggleShowAddProductSide(selectedProductQuantity.id)} >
                  Add
                </Button>
              )}
            </div>
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
