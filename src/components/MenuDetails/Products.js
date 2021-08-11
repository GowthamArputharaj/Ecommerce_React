import React, { Component } from 'react';
import { connect } from 'react-redux';


// Material UI Component
import { withStyles } from '@material-ui/core';

// React Componenets
import ProductCategories from './ProductCategories';

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
  constructor(props) {
    super(props);

    this.state = ({
      // 
    });
  }

  render() {
    const {classes} = this.props;
    var categories = this.props.categories;

    var selected_category = this.props.categories.filter(category => { 
      // console.log(category.id, this.props.category_id);  
      return parseInt(category.id) === parseInt(this.props.category_id); 
    });

    if(selected_category.length > 0) {
      selected_category = selected_category[0];

      selected_category.isSelected = true;

      var temp = [];

      temp.push(selected_category);

      this.props.categories.map(category => {
        if(category.id !== this.props.category_id) { 
          temp.isSelected = false;
          temp.push(category); 
        }
      });

      categories = temp;

      
    } else {
      

    }

    // console.log(selected_category, categories);
  

    return (
      <div
        className={classes.ProductCategories} 
      >
        <ProductCategories 
          categories={categories}
          category_id={this.props.category_id}

        ></ProductCategories>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Products));