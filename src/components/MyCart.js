import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';


// React Componoentns
import Footer from './Home/Footer';
import CartCalculations from './MyCart/CartCalculations';
import CartItems from './MyCart/CartItems';

// Images
import my_cart_header_back_svg from '../images/my_cart_header_back_svg.svg';



const styles = (theme) => ({
  root: {
    // height: '100vh',
		// minHeight: '100vh',
    margin: 'auto',
    width: '100%',
  },
	Header: {
		height: '10vh',
    backgroundColor: '#FFFFFF',
    fontStyle: 'normal',
    position: 'fixed',
    top: '0px', 
    left: '0px',
    width: '100vw',
    zIndex: '8',
    
    [theme.breakpoints.only('sm')]: {
      width: '49vw',
      margin: 'auto',
      left: '24.5vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '32vw',
      margin: 'auto',
      left: '33.33vw',
    },
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
});


const mapStateToProps = (state) => ({
  all_categories: state.shop.categories,
  cart_details: state.shop.cart_details,
});


const mapDispatchToProps = {
  getAllCategories: getAllCategories,
}


class MyCart extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      products: [
        {id: 1, name:'Amul Gold Milk', actual_price: 68, selling_price: 61, tags: ['12%off', 'Buy 1, Get 1'], cart_qty: 1},
        {id: 2, name:'Amul Lactose free', actual_price: 84, selling_price: 84, tags: ['Buy 1, Get 1'], cart_qty: 1},
        {id: 3, name:'Tropicana Orange', actual_price: 68, selling_price: 61, tags: ['12%off'], cart_qty: 0},
      ],
      cart_calculations: {
        cart_total_value: 0,
        cart_saving_value: 0,
        cart_payable_value: 0,
      },
      total_cart_qty: 0,
      total_cart_price: 0,
    });

  }
  
  componentDidMount = () => {
    this.updateCartCalculations();
  }

  updateCartCalculations = () => {

    var products = this.state.products;
    var cart_total_value, cart_saving_value, cart_payable_value, total_cart_qty, total_cart_price;
    cart_total_value = cart_saving_value = cart_payable_value = total_cart_qty = total_cart_price = 0;

    products.map((product, index) => {
      if(product.cart_qty !== 0) {
        // cart_total_value
        cart_total_value = cart_total_value + (product.cart_qty * product.actual_price);
        
        // cart_payable_value
        cart_payable_value = cart_payable_value + ( product.cart_qty * product.selling_price );

        // total_cart_qty
        total_cart_qty = total_cart_qty + product.cart_qty;
      }
      return true;
    });

    // total_cart_price
    total_cart_price = cart_payable_value;

    // cart_saving_value
    cart_saving_value = cart_total_value - cart_payable_value;
    
    this.setState({
      cart_calculations: {
        cart_total_value: cart_total_value,
        cart_saving_value: cart_saving_value,
        cart_payable_value: cart_payable_value,
      },
      total_cart_qty: total_cart_qty,
      total_cart_price: total_cart_price,
    });

  }

  render() {
    document.querySelector('body').classList.remove('stop_scrolling');
    const {classes} = this.props;

    // CART ITEMS
    var all_categories = this.props.all_categories;
    var all_cart_products = [];
    all_categories.map((category, cat_idx) => {
      category.products.map((product, prod_idx) => {
        if(product.cart_qty > 0) {
          all_cart_products.push(product);
        }
        return true;
      });
      return true;
    });

    // CART CALCULATIONS
    var cart_details = this.props.cart_details;


    return (
      <div className={classes.root}>
        <div className={classes.HeaderDiv} >
          <div className={classes.Header}>
            <span className={classes.headerTitle}>
              <Link to="/home" style={{ textDecorationLine: 'none',}}>
                <img src={my_cart_header_back_svg} alt="Back"></img>
              </Link>
              &ensp;My Cart
              <span className={classes.headerDescription}>&ensp;{cart_details.total_cart_items} items</span>
            </span>
          </div>
        </div>
        <div style={{ minHeight: '0vh', marginTop: '10vh', padding: '1rem', }}>
          <CartItems products={all_cart_products} />
          <CartCalculations cart_calculations={cart_details}  />
        </div>
        <Footer cart_calculations={cart_details}  />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyCart));

// export default MyCart;





