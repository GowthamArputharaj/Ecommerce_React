import React, { Component } from 'react';
import { connect } from 'react-redux';


// Material UI Component
import { withStyles } from '@material-ui/core';

// React Componenets
import ProductCategories from './Products/ProductCategories';

const styles = (theme) => ({
  root: {
    
  },
  ProductCategories: {
    width: '100%',
    boxSizing: 'border-box',
  },
});


const mapStateToProps = (state) => ({
  categories: state.shop.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // selectedAddress: () => dispatch({ type: 'GET_SELECTED_ADDRESS' }),
    // allLanguages: () => dispatch({ type: 'GET_ALL_LANGUAGES' }),
  }
}

class Products extends Component {
  // constructor(props) {
  //   super(props);

  // }


  render() {
    const {classes} = this.props;
    var categories = this.props.categories;
  
    return (
      <div
        className={classes.ProductCategories} 
      >
        <ProductCategories 
          categories={categories}

        ></ProductCategories>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));