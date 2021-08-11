import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unSelectAllAddressPreference, changePreferredAddress, deleteAddress } from '../../actions/index.js';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';


// React Componoentns

// Images


const styles = (theme) => ({
  AddressWithOutBorder: {
    width: '100%',
    // padding: '0.2rem 0.2rem 0rem 0.2rem',
    padding: '0.2rem',
    fontFamily: 'Roboto',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',

    backgroundColor: '#FFFFFF',
    marginTop: '0.5rem',
  },
  AddressWithBorder: {
    width: '100%',
    // padding: '0.2rem 0.2rem 0rem 0.2rem',
    padding: '0.2rem',
    fontFamily: 'Roboto',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',

    backgroundColor: '#FFFFFF',
    marginTop: '0.5rem',

    //  TO SHOW BORDER
    borderRadius: '8px',
    border: '1px solid rgba(36, 39, 44, 0.5)',
  },
  checkBx: {
    color: '#24272C',
  },
  name: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#000000',
  },
  def: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#000000',
  },
  address: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#000000',
    opacity: '0.7',
  },
  phone: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#000000',
    opacity: '0.7',
  },
  buttons: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    color: '#000000',
    opacity: '0.7',
    // padding: '1rem',
    // marginTop: '1rem',
  },
  editDeleteButton: {
    border: 'none', 
    backgroundColor: 'transparent',
    marginTop: '0.5rem',
    paddingLeft: '-16px',
    marginLeft: '-16px',
  },
});


// Redux
const mapStateToProps = (state, props) => ({
  total_cart_items: state.shop.cart_details.total_cart_items,
  address: state.shop.addresses.filter(address => address.id === props.address_id)[0],
  addresses: state.shop.addresses,
});

const mapDispatchToProps = {
  unSelectAllAddressPreference,
  changePreferredAddress,
  deleteAddress,
};


class Address extends Component {
  constructor(props) {
    super(props);

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.state = ({
      isPreferredAddress: false,
    });
  }
  
  handleCheckboxChange(address_id) {
    this.props.unSelectAllAddressPreference();
    this.props.changePreferredAddress(address_id);
  }

  deleteAddress(address_id) {
    this.props.deleteAddress(address_id);
  }
  
  render() {
    const {classes} = this.props;
    document.querySelector('body').classList.remove('stop_scrolling');

    const address = this.props.address;

    return (
      <div>
        <div className={address.isSelected ? classes.AddressWithBorder : classes.AddressWithOutBorder}>
          <Grid container >
            <Grid item xs={2} sm={2}>
              <span >
                <Checkbox 
                  name={`address_${address.id}`} 
                  className={classes.checkBx + 'address_checkbox'} 
                  style={{ color: '#24272C', }}
                  checked = { address.isSelected ? true : false}
                  onClick={() => {
                    this.handleCheckboxChange(address.id) 
                  }}
                />
              </span>
            </Grid>
            <Grid item xs={10} sm={10} style={{ paddingBottom: '0px', }} >
              <div style={{ marginTop: '0.7rem',}}>
                <span className={classes.name}>
                  {address.name}
                </span>
                <span className={classes.def}>
                  {address.isSelected === true ? (
                      <span>(Default)</span>
                    ) : (
                      <span></span>
                    )
                  }
                </span>
              </div>
              <div style={{ marginTop: '0.2rem',}}>
                <span className={classes.address} >
                  {address.address_value}
                </span>
              </div>
              <div style={{ marginTop: '0.1rem',}}>
                <span className={classes.phone}>
                  {address.phone}
                </span>
              </div>
              <span className={classes.buttons} >
                <Grid container >
                  <Grid item xs={10} md={10}>
                    <Button variant="text" 
                      className={classes.editDeleteButton} 
                      onClick={() => this.props.toggleShowEditAddressSide(address.id)}

                      ><b>EDIT</b>
                    </Button>

                    <Button variant="text" 
                      className={classes.editDeleteButton} 
                      style={{ marginLeft: '1%',}} 
                      onClick={() => this.deleteAddress(address.id)}

                      ><b>DELETE</b>
                    </Button>

                  </Grid>
                  <Grid item xs={2} md={2}>
                    <IconButton aria-label="" style={{  }} >
                      <MoreVertIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </span>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Address));





