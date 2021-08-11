import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI COmpeonets
import { withStyles, Button, Grid } from '@material-ui/core';

// React Componenets

//  Images

const styles = (theme) => ({
  ProductQuantityVariety: {
    padding: '0.3rem',
    lineHeight: '1.4rem',
    boxSizing: 'border-box',
    overFlow: 'hidden',
    fontFamily: 'Roboto',
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
  addButtonZero: {
    width: '6rem',
    height: '36px',

    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    background: '#FFFFFF',
  },
});

// Redux
const mapStateToProps = (state, props) => ({
  // 
});

const mapDispatchToProps = {
  // 
};


class ProductQuantityVariety extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.ProductQuantityVariety}>
        <Grid container direction="row" alignItems="center" justifyContent="flex-start">
          <Grid item xs={8} >
            <div>
              <span>{this.props.variety.qty}</span><br></br>
              <span>
                <span className={classes.reducedPrice}>₹ {this.props.variety.selling_price}</span>&ensp;
                <span className={classes.originalPrice}><strike>₹ {this.props.variety.actual_price}</strike></span>&ensp;
                <span>
                  {
                    this.props.variety.tags.map((tag, index) => {
                      return (
                        <span key={index}>
                          <span variant="text" className={classes.discountPercentage}>{tag}</span>&ensp;
                        </span>
                      )
                    })
                  }
                </span>
              </span>
            </div>
          </Grid>
          <Grid item xs={4} >
            <Button variant="outlined" className={classes.addButtonZero} value={this.props.variety.id} onClick={() => this.props.onVarietyAddButton(this.props.variety.id)}  >
              Add
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductQuantityVariety));