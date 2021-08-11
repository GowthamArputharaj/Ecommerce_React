import React, { Component } from 'react';

// Material UI COmpeonets
import { withStyles } from '@material-ui/core';

// React Componenets
import ProductCategory from './ProductCategory';

const styles = (theme) => ({
  root: {
    marginTop: '2rem', 
    marginBottom: '8.5vh',
    width: '100%',
    boxSizing: 'border-box',
  },
});

class ProductCategories extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        {
          this.props.categories.map((category, index) => {
            return (
              <div key={category.id}>
                <ProductCategory 
                  category={category} 
                  category_id={this.props.category_id}

                />
                <hr></hr>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default withStyles(styles)(ProductCategories);