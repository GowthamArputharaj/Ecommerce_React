import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto';


// React Componenets

// Images
import amul_cool from '../../../images/amul_cool.jpg';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  product: {
    padding: '0.5rem 0',
    // width: '100%',
  },
  gridContainer: {
    width: '100%',
  },
  gridImage: {},
  gridDetails: {
    border: '0px',
    
    fontFamily: 'Roboto',
    fontStyle: 'normal',

  },
  gridAddButton: {},
  productImage: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    left: '24px',
    
    // top: '380px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  productDetails: {
    padding: '0.5rem',
    border: '0',
  },
  productSpecial: {
    fontWeight: '500',
    fontSize: '9px',
    lineHeight: '11px',
    /* identical to box height */
    textAlign: 'right',
    color: '#FFFFFF',

    backgroundColor: '#24272C',
    opacity: '0.3',
    borderRadius: '2px',

  },
  productTitle: {
    margin: '5px 0px 0px 0px',

    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',

    color: '#000000',
  },
  productDescription: {
    margin: '5px 0px 0px 0px',

    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.5',

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
    position: 'absolute',
    width: '88px',
    height: '36px',
    left: '248px',

    // top: '627px',
    // top: '65%',
    marginTop: '13%',

    background: '#FFFFFF',
    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',

  },
  
}));

function Product() {
  var productImage = amul_cool;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.product}>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        // justifyContent="center"
        justifyContent="space-around"
        className={classes.gridContainer}
        spacing={0}

      >
        <Grid item xs={3} className={classes.gridImage}>
          <Paper component="form" className={classes.productImage}  >
            <img src={amul_cool}></img>
          </Paper>
        </Grid>
        <Grid item xs={6} style={{ border: '0'}} className={classes.gridDetails}>
          <Button variant="text" className={classes.productSpecial}>
            Best Seller
          </Button>
          <Typography className={classes.productTitle} ><b>Amul Cool Milk</b></Typography>
          <Typography className={classes.productDescription} >Tetrapack (1L)</Typography>
          <Typography  >
            <b className={classes.reducedPrice}>₹ 61</b>
            <strike className={classes.originalPrice}>  ₹ 68  </strike>
            <span variant="text" className={classes.discountPercentage}>12%off</span>
          </Typography>
        </Grid>
        <Grid item xs={3} className={classes.gridAddButton}>
          <Button variant="outlined" className={classes.addButton}>
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}


export default Product;
