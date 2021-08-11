import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import '@fontsource/roboto';

// React Componenets
import Product from './Product';


const styles = (theme) => ({
  root: {
    width: '95%',
    margin: 'auto',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    paddingTop: '0px',
    paddingBottom: '0.1rem',
    // borderBottom: '1px solid #CCC',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  productCategoryTitle: {
    // position: 'absolute',
    width: '157px',
    height: '21px',
    left: '24px',
    top: '336px',

    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#24272C',
  },
  categoryDescription: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    /* identical to box height */

    // color: '#CCC',
    color: '#24272C',

    opacity: '0.5',
  },
  hr: {
    color: '#24272C',
    backgroundColor: '#24272C',

    opacity: '0.5',
  }

});

class ProductCategory extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      open: false,
    });

  }

  componentDidMount = () => {
    
    if(this.props.category.isSelected === true) {
      this.setState({
        // open: true,
        open: false,
        category_id: this.props.category_id,
        category_id_first_click_not_happened: true,
      });
    }

  }

  handleClick = () => {
    if(this.state.category_id_first_click_not_happened === true) {
      this.setState({
        open: false,
        category_id_first_click_not_happened: false,
      })
    } else {
      this.setState({
        open: !this.state.open,
      });
    }
  };

  render() {
    
    const { classes } = this.props;
  

    return (
      <List
        component="nav"
        className={classes.root}
      >

        <Collapse in={this.state.open || this.state.category_id_first_click_not_happened} timeout="auto" unmountOnExit >
          {
            this.props.category.products.map((product, index) => {
              return (
                <Product
                  product={product}
                  category_id={this.props.category.id}
                  key={product.id}

                />
              )
            })
          }
        </Collapse>
        <ListItem button onClick={this.handleClick} style={{ width: '95%', paddingRight: '0px' }} >
          {/* <ListItemText primary="Dairy Products (20)" /> */}
          <ListItemText style={{ fontWeight: '900', fontSize: '18px', lineHeight: '21px', color: '#24272C', }}>
            <b>{this.props.category.category_title} ({this.props.category.category_quantity})</b><br></br>
            <span className={classes.categoryDescription}>{this.props.category.category_description}</span>
          </ListItemText>
          {this.state.open ? <ExpandMore /> : <ExpandLess />}

        </ListItem>
      </List>
    )
  }
}


export default withStyles(styles)(ProductCategory);

