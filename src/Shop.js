import React, { Component } from 'react';

// import useMediaQuery from '@material-ui/core/useMediaQuery';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

// React Components
import Home from './components/Home.js';
import Front from './components/Front.js';
import MyCart from './components/MyCart';
import MyAddress from './components/MyAddress.js';
import MyOrders from './components/MyOrders.js';
import MenuDetails from './components/MenuDetails.js';


// Images


// All styles here..
const styles = (theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      // width: '0.4em'
      width: '0px'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  root: {

		minHeight: '100vh',
    
    // boxShadow: '0px -2px 18px rgba(0, 0, 0, 0.2)',
    // boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)',
    
    // backgroundColor: '',

    width: '100vw',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      maxWidth: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',
    },

    // border: '1rem solid black',
    // border: '1px solid red',

    overFlow: 'hidden !important',
    
  },
});


// const Error = (props) => {
//   return (
//     <div>
//       <h1>Enter Valid URL</h1>
//     </div>
//   )
// };



// Shop

class Shop extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    
    const { classes } = this.props;
  
    return (
      <main >
        <div className={classes.root}>
          <Grid container alignItems="center" justifyContent="center" >
            <Grid item xs={12} sm={12} md={12} >
              <Switch>
                <Route path="/" component={Front} exact ></Route>
                <Route path="/home" component={Home} exact ></Route>
                <Route path="/my-cart" component={MyCart} exact ></Route>
                <Route path="/my-address" component={MyAddress} exact ></Route>
                <Route path="/my-orders" component={MyOrders} exact ></Route>
                <Route path="/menu-details/:category_id" component={MenuDetails} exact ></Route>
                {/* <Route path="/menu-details" component={MenuDetails} exact ></Route> */}
                {/* <Route path="/new-address" component={NewAddress} exact ></Route> */}
                {/* <Route component={Error} ></Route> */}
              </Switch>
            </Grid>
          </Grid>
        </div>
      </main>
    )

  }

}

export default withStyles(styles)(Shop);


