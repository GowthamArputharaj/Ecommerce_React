import React from 'react';
import { Link } from 'react-router-dom';


// Material UI Components
import { makeStyles, useTheme, withTheme } from '@material-ui/core/styles';


// React Componoentns
import Addresses from './MyAddress/Addresses';
import Footer from './Home/Footer';
import NewAddress from './MyAddress/NewAddress';

// Images
import my_cart_header_back_svg from '../images/my_cart_header_back_svg.svg';
import address_right_arrow_svg from '../images/address_right_arrow_svg.svg';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '100%',
  },
  Header: {
    height: '18vh',
    width: '100%',

    backgroundColor: '#FFFFFF',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    wordWrap: 'break-word',

  },
  headerTitle: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
    // marginTop: '8%',
    marginTop: '2rem',

    position: 'absolute',
    transform: 'translate(8%, 0%)',
    width: '90%',
  },
  headerDescription: {
    paddingLeft: '1rem',
  },
  headerDescriptionText: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '0%',
    color: '#000000',
    opacity: '0.5',

    width: '100%',
  },
  addNewAddress: {
    marginTop: '1rem',
    marginLeft: '15%',
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
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100vh',
    background: 'rgba(36, 39, 44, 0.1)',
    backdropFilter: 'blur(4px)',
    zIndex: '3',
  }
}));


const MyAddress = (props) => {

  const classes = useStyles();

  document.querySelector('body').classList.remove('stop_scrolling');

  var [showNewAddress, setShowNewAddress] = React.useState(false);

  const toggleSide = () => {
    setShowNewAddress(!showNewAddress);
    console.log(showNewAddress);
    if (showNewAddress) {
      document.querySelector('body').classList.remove('stop_scrolling');
    } else {
      document.querySelector('body').classList.add('stop_scrolling');
    }
  }

  return (
    <div>
      {showNewAddress ?
        <>
          <div className={classes.backgroundBlur} tabIndex="0" role="button" onClick={toggleSide}>
          </div>
          <NewAddress />
        </>
        :
        (
          <></>
        )
      }
      <div className={classes.root}>
        <div className={classes.Header}>
          <span className={classes.headerTitle}>
            <Link to="/home" style={{ textDecorationLine: 'none', }}>
              <img src={my_cart_header_back_svg} alt="Back"></img>
            </Link>
            &ensp;My Addresses <br></br>
            <div className={classes.headerDescription}>
              <span className={classes.headerDescriptionText}>
                Your address details will not be disclosed to the shops until your order is placed
              </span>
            </div>
          </span>
        </div>
        <Addresses />
        <div className={classes.addNewAddress}>
          {/* <Link to="/new-address" className={classes.addNewAddressLink} style={{ textDecorationLine: 'none'}} >
            <u>Add New Address</u>
            &ensp;
            <img src={address_right_arrow_svg} alt="Go"  ></img>
          </Link> */}
          <span className={classes.addNewAddressLink} style={{ textDecorationLine: 'none' }} onClick={toggleSide}>
            <u>Add New Address</u>
            &ensp;
            <img src={address_right_arrow_svg} alt="Go"  ></img>
          </span>
        </div>

        <Footer />
      </div>
    </div>
  )
}


export default MyAddress;





