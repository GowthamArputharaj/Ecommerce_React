import React, { Component } from 'react';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';

// React Componoentns
import CartItem from './CartItem';

// Images
const styles = theme => ({
  CartItem: {
    
  }
});


// const CartItems = (props) => {
class CartItems extends Component {
  
  render() {
    const {classes} = this.props;
    
    return (
      <div className={classes.CartItem}>
        {this.props.products.map((product, index) => {
          return (
            <CartItem product={product} index={index} key={product.id} />
          )
        })}
      </div>
    )
  }
}


export default withStyles(styles)(CartItems);

// export default CartItems;





