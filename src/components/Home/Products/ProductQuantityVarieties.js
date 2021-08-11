import React, { Component } from 'react';

// Material UI COmpeonets
import { withStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// React Componenets
import ProductQuantityVariety from './ProductQuantityVariety';

// Image Components
import amul_lactoce from '../../../images/amul_lactose_free.jpg';


const styles = (theme) => ({
  ProductQuantityVarieties: {
    width: '90%',
    height: '50vh',
    margin: 'auto',
    // position: 'sticky',
    position: 'fixed',
    // left: '50%',
    // top: '50%',
    transform: 'translate(0%, -133%)',

    backgroundColor: '#FFFFFF',
    zIndex: '10',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    padding: '1rem',
    boxSizing: 'border-box',
    fontFamily: 'Roboto',

    [theme.breakpoints.only('sm')]: {
      width: '40vw',
      height: '50vh',
      transform: 'translate(0%, -120%)',
      left: '30vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '30vw',
      margin: 'auto',
      transform: 'translate(0%, -120%)',
    },

    overFlowY: 'scroll',
  },
  varietyList: {
    marginTop: '1rem',
    boxSizing: 'border-box',
    overFlow: 'hidden',
  },
  imageTitle: {
    width: '60%',
    textAlign: 'center',
    margin: 'auto',
  },
  image: {},
  title: {},
  close: {
    float: 'right',
  },
});

class ProductQuantityVarieties extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }


  render() {
    const {classes} = this.props;

    return (
      <div className={classes.ProductQuantityVarieties}>
        <div className={classes.close} onClick={this.props.onCloseClick}>
          <CloseIcon />
        </div>
        <div className={classes.imageTitle}>
          <div className={classes.image}>
            <img src={amul_lactoce} alt="Product"></img>
          </div>
          <div className={classes.title}>
            <span>{this.props.title}</span>
          </div>
        </div>
        {/* <div className={classes.close}>
          <CloseIcon />
        </div> */}
        <div className={classes.varietyList} >
          {
            this.props.varieties.map((variety, index) => {
              return (
                <div key={index} >
                  <ProductQuantityVariety category_id={this.props.category_id} product_id={this.props.product_id} variety={variety} onVarietyAddButton={this.props.onVarietyAddButton} />
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(ProductQuantityVarieties);