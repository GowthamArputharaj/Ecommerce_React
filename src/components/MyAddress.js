import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';


// React Componoentns
import Addresses from './MyAddress/Addresses';
import Footer from './Home/Footer';
import NewAddress from './MyAddress/NewAddress';
import EditAddress from './MyAddress/EditAddress';



// Images
import my_cart_header_back_svg from '../images/my_cart_header_back_svg.svg';
import address_right_arrow_svg from '../images/address_right_arrow_svg.svg';
import { Grid } from '@material-ui/core';



const styles = (theme) => ({
  root: {
    // margin: 'auto',
    // width: '100%',
  },
  HeaderDiv: {
    backgroundColor: '#FFFFFF',
    top: '0px',
    left: '0px',
    position: 'fixed',
    height: '10vh',

    paddingTop: '2rem',
    width: '100vw',  
    
    margin: 'auto',
    zIndex: '8',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
      paddingTop: '2rem',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',
      paddingTop: '2rem',
    },

    // [theme.breakpoints.only('sm')]: {
    //   width: '49vw',
    //   margin: 'auto',
    //   left: '24.5vw',
    //   paddingTop: '2rem',
    // },

    // [theme.breakpoints.up('md')]: {
    //   width: '32vw',
    //   margin: 'auto',
    //   left: '33.33vw',
    //   paddingTop: '2rem',
    // },

  },
  Header: {
    // height: '8rem',

    width: '85%',
    margin: 'auto',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    wordWrap: 'break-word',
    [theme.breakpoints.up('md')]: {
      width: '26vw',
      margin: 'auto',
      // left: '33.33vw',
      marginLeft: '4vw',
    },
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
  },
  headerDescription: {

  },
  headerDescriptionText: {
    fontWeight: 'normal',
    fontSize: '12px',
    color: '#000000',
    opacity: '0.5',
  },
  arrowBack: {
    transform: 'translate(100%, 0%)',
    position: 'absolute',

  },
  addNewAddress: {
    marginTop: '1rem',
    marginLeft: '15%',
    paddingBottom: '15vh',
    boxSizing: 'border-box',
  },
  addNewAddressLink: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '18px',
    textDecorationLine: 'underline',
    color: '#000000',
  },
  backgroundBlur: {
    backgroundColor: 'rgba(36, 39, 44, 0.3)',
    width: '100vw',
    height: '100vh',
    zIndex: '9',
    position: 'fixed',
    top: '0px',
    left: '0px',
    backdropFilter: 'blur(3px)',
    margin: 'auto',
    boxSizing: 'border-box',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',

      height: '80vh',
    },
    
  }
});


// Redux
const mapStateToProps = (state) => ({
  total_cart_items: state.shop.cart_details.total_cart_items,
  cart_details: state.shop.cart_details,
  addresses: state.shop.addresses,
});

const mapDispatchToProps = {
  // 
};



class MyAddress extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      showNewAddress: false,
      showEditAddress: false,
      edit_address_id: null,
    });

  }

  toggleShowNewAddressSide = () => {
    this.setState({
      showNewAddress: !this.state.showNewAddress,
      showEditAddress: false,
    });

    if (this.state.showNewAddress) {
      document.querySelector('body').classList.remove('stop_scrolling');
    } else {
      document.querySelector('body').classList.add('stop_scrolling');
    }
  }

  toggleShowEditAddressSide = (edit_address_id) => {

    if (edit_address_id !== null) {
      this.setState({
        edit_address_id: edit_address_id,
      });
    }

    this.setState({
      showEditAddress: !this.state.showEditAddress,
      showAddAddress: false,
    });

    if (this.state.showEditAddress) {
      document.querySelector('body').classList.remove('stop_scrolling');
    } else {
      document.querySelector('body').classList.add('stop_scrolling');
    }
  }

  render() {

    const { classes } = this.props;

    const cart_details = this.props.cart_details;

    document.querySelector('body').classList.remove('stop_scrolling');

    return (
      <div>
        {this.state.showNewAddress ?
          <>
            <div className={classes.backgroundBlur} tabIndex="0" role="button" onClick={this.toggleShowNewAddressSide}>
            </div>
            <NewAddress toggleSide={this.toggleShowNewAddressSide} />
          </>
          :
          (
            <>

            </>
          )
        }
        {this.state.showEditAddress ?
          <>
            <div className={classes.backgroundBlur} tabIndex="0" role="button" onClick={() => this.toggleShowEditAddressSide(this.state.edit_address_id)}>
            </div>
            <EditAddress toggleSide={() => this.toggleShowEditAddressSide(this.state.edit_address_id)} edit_address_id={this.state.edit_address_id} />
          </>
          :
          (
            <>

            </>
          )
        }
        <div className={classes.root}>
          <div className={classes.HeaderDiv} >
            <Grid container className={classes.Header}>
              <Grid item xs={1} >
                {/* <span className={classes.arrowBack} >
                  <Link to="/home" style={{ textDecorationLine: 'none', }}>
                    <img src={my_cart_header_back_svg} alt="Back"></img>
                  </Link>
                </span> */}
              </Grid>
              <Grid item xs={11} sm={11} md={12} >
                <span className={classes.headerTitle}>
                  <Link to="/home" style={{ textDecorationLine: 'none', marginLeft: '-1rem' }}>
                    <img src={my_cart_header_back_svg} alt="Back"></img>
                  </Link>
                  &ensp;My Addresses <br></br>
                </span>
                <div className={classes.headerDescription}>
                  <span className={classes.headerDescriptionText}>
                    Your address details will not be disclosed to the shops until your order is placed
                  </span>
                </div>
              </Grid>
            </Grid>
          </div>

          <div style={{ minHeight: '75vh', marginTop: '18vh',   }}>
            <Addresses toggleShowEditAddressSide={this.toggleShowEditAddressSide} />
            <div className={classes.addNewAddress} >
              <span className={classes.addNewAddressLink} style={{ textDecorationLine: 'none' }} onClick={this.toggleShowNewAddressSide} >
                <u>Add New Address</u>
                &ensp;
                <img src={address_right_arrow_svg} alt="Go"  ></img>
              </span>
            </div>

          </div>

          {!this.state.showNewAddress && !this.state.showEditAddress ?
            <Footer cart_calculations={cart_details} />
            :
            (<></>)
          }
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MyAddress));





