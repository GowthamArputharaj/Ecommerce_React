import React, { Component } from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateLanguage } from '../../actions';


// Material UI Componenets
import { withStyles } from '@material-ui/core/styles';
import { Slide, Grid } from '@material-ui/core';

// Files
import nav_side_logo_image from '../../images/nav_side_logo_image.jpg';
import nav_side_call_svg from '../../images/nav_side_call_svg.svg';
import nav_side_whatsapp_svg from '../../images/nav_side_whatsapp_svg.svg';
import pencil_svg from '../../images/pencil_svg.svg';


const styles = (theme) => ({
  DrawerContent: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '80%',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    zIndex: '10',
    padding: '1rem 0.2rem 0.2rem 0.2rem',
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.only('sm')]: {

    },
  },
  logoLang: {
    marginTop: '1.5rem',
    marginBottom: '1rem',
    padding: '0px',
  },
  logoImage: {
    width: '100%',
  },
  languageBox: {
    textAlign: 'right',
    background: '#FFFFFF',
    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    marginTop: '8%',
    marginLeft: '15%',
    right: '30%',
    padding: '0.4rem 0.3rem 0.3rem 0.3rem',
    width: '6rem',

    
    [theme.breakpoints.only('sm')]: {
      marginLeft: '25%',
    },

    [theme.breakpoints.up('md')]: {
      marginLeft: '30%',
    },

  },
  languageEnglish: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '12px',
    fontFamily: 'Roboto',
    color: '#24272C',
    // opacity: '0.7',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  languageHindi: {
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '12px',
    color: '#24272C',
    // color: '#1B98CA',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  addressTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
    marginLeft: '5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  addressLine2: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000000',

    opacity: '0.7',
    marginTop: '0.3rem',
    marginLeft: '5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  phone: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000000',

    opacity: '0.7',
    marginTop: '0.3rem',
    marginLeft: '5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  callWhatsapp: {
    marginTop: '0.5rem',
    paddingLeft: '0px',
    width: '100%',
    marginLeft: '3%',
  },
  callWhatsappImage: {
    width: '35%',
  },
  nameEditPhone: {
    marginLeft: '4%',
    marginTop: '5%',
  },
  nameEdit: {

  },
  name: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000000',
  },
  pencilButton: {
    marginTop: '0px',
    backgroundColor: 'transparent',
    padding: '0px',
    border: '0px',
    transform: 'translate(0%, 25%)',
  },
  phone2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.5',
    marginTop: '0.3rem',
  },
  MyDetails: {
    marginLeft: '8%',
    marginTop: '10%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '32px',
    color: '#000000',
  },
  PoweredBy: {
    position: 'absolute',
    bottom: '4vh',
    marginLeft: '8%',
  },
  poweredByText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.7',
  },
  selectedLanguage: {
    color: '#1B98CA',
  },
});


// const mapStateToProps = (state) => ({
//   selectedLanguage: state.shop.selectedLanguage,
// });

const mapStateToProps = (state) => ({
  outlets: state.shop.outlets,
  selectedOutlet: state.shop.outlets.filter(outlet => outlet.isSelected === true),
  selectedAddress: state.shop.addresses.filter(address => address.isSelected === true),
  addresses: state.shop.addresses,
  selectedLanguage: state.shop.selectedLanguage,
});

const mapDispatchToProps = {
  updateLanguage,
};

class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      selectedLanguage: 'hindi',
    });
  }



  selectLanguage = (lang) => {
    console.log(lang);
    this.setState({
      selectedLanguage: lang,
    });

    this.props.updateLanguage(lang);

  }


  render() {

    const { classes } = this.props;

    const addresses = this.props.addresses;
    const selectedLanguage = this.props.selectedLanguage;
    var selectedAddress = this.props.selectedAddress;

    if (selectedAddress.length > 0) {
      selectedAddress = selectedAddress[0];
    } else {
      selectedAddress = addresses[0];
      if (addresses.length === 0) {
        selectedAddress = { name: 'No name', phone: '' };
      }
    }



    // const selectedOutlet = this.props.selectedOutlet[0];
    var outlets = this.props.outlets;
    var selectedOutlet = outlets.filter((outlet) => outlet.isSelected === true);
    if (selectedOutlet.length > 0) {
      selectedOutlet = selectedOutlet[0];
    } else {
      selectedOutlet = outlets[0];
    }


    return (
      <div className={classes.root}>
        <Slide direction="right" in={true} mountOnEnter timeout={300} >
          <div className={classes.DrawerContent} >
            <div style={{ width: '100%', }}>
              <Grid container  justifyContent="space-around" alignItems="center"  className={classes.logoLang} >
                <Grid item xs={6} sm={6} md={6}>
                  <img src={nav_side_logo_image} alt="Logo" className={classes.logoImage} ></img>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                <div className={classes.languageBox} >
                    <span>
                      <span className={classes.languageEnglish} >
                        <span
                          className={selectedLanguage === 'english' ? 'active_language' : ''}
                          onClick={() => this.selectLanguage('english')}
                        >English</span>
                      </span>
                      <span style={{ color: '#1B98CA', }}>|</span>
                      <span className={classes.languageHindi} >
                        <span
                          className={selectedLanguage === 'hindi' ? 'active_language' : ''}
                          onClick={() => this.selectLanguage('hindi')}
                        >हिंदी</span>
                      </span>
                    </span>
                  </div>
                </Grid>
              </Grid>
              {/* <Box display="flex" p={1} className={classes.logoLang} >
                <Box p={1} flexGrow={2}  >
                  <img src={nav_side_logo_image} alt="Logo" className={classes.logoImage} ></img>
                </Box>
                <Box p={1} flexGrow={3}  >
                  <div className={classes.languageBox} >
                    <span>
                      <span className={classes.languageEnglish} >
                        <span
                          className={selectedLanguage === 'english' ? 'active_language' : ''}
                          onClick={() => this.selectLanguage('english')}
                        >English</span>
                      </span>
                      <span style={{ color: '#1B98CA', }}>|</span>
                      <span className={classes.languageHindi} >
                        <span
                          className={selectedLanguage === 'hindi' ? 'active_language' : ''}
                          onClick={() => this.selectLanguage('hindi')}
                        >हिंदी</span>
                      </span>
                    </span>
                  </div>
                </Box>
              </Box> */}
            </div>
            <div>
              <div className={classes.addressTitle} >
                {selectedOutlet.name}
              </div>
              <div className={classes.addressLine2} >
                {selectedOutlet.address}
              </div>
              <div className={classes.phone}>
                {selectedOutlet.phone}
              </div>
            </div>
            <div className={classes.callWhatsapp} >
              <span>
                <img src={nav_side_call_svg} alt="call" className={classes.callWhatsappImage} ></img>
                <img src={nav_side_whatsapp_svg} alt="whatsapp" className={classes.callWhatsappImage} ></img>
              </span>
            </div>
            <hr></hr>
            <div className={classes.nameEditPhone}>
              <div className={classes.nameEdit} >
                <span className={classes.name}>{selectedAddress.name} </span>
                <button className={classes.pencilButton} >
                  <img src={pencil_svg} alt="Edit"></img>
                </button>
              </div>
              <div className={classes.phone2} >
                +91 9560 355 887
              </div>
            </div>
            <div className={classes.MyDetails}>
              <p>
                {/* <span>My Cart</span> */}
                <span>
                  <Link to="/my-cart" style={{ textDecorationLine: 'none', color: 'black',}}>My Cart </Link>
                </span>
              </p>
              <p>
                <span>
                  <Link to="/my-address" style={{ textDecorationLine: 'none', color: 'black', }}>My Addresses</Link>
                </span>
              </p>
              <p>
                <span>
                  <Link to="/my-orders" style={{ textDecorationLine: 'none', color: 'black', }}>My Orders</Link>
                </span>
              </p>
            </div>
            <div className={classes.PoweredBy}>
              <p className={classes.poweredByText}>
                Powered by: <span><u>easysocial.io</u></span>
              </p>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideMenu))




