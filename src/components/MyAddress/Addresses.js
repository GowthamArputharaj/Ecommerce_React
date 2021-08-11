import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';


// React Componoentns
import Address from './Address';

// Images



const styles = (theme) => ({
  Addresses: {
    width: '85%',
    margin: 'auto',
  },
  Address: {

  }
});



// Redux
const mapStateToProps = (state, props) => ({
  total_cart_items: state.shop.cart_details.total_cart_items,
  address: state.shop.addresses.filter(address => address.id === props.address_id)[0],
  addresses: state.shop.addresses,
});

const mapDispatchToProps = {
  // 
};


class Addresses extends Component {
  constructor(props) {
    super(props);

    this.state = ({

    });
  }

  render() {
    const { classes } = this.props;
    document.querySelector('body').classList.remove('stop_scrolling');

    const addresses = this.props.addresses;

    return (
      <div>
        <div className={classes.Addresses} >
          {
            addresses.map((address) => {
              return (
                <Address
                  className={classes.Address}
                  key={address.id}
                  address_id={address.id}
                  toggleShowEditAddressSide={this.props.toggleShowEditAddressSide}

                />
              )
            })
          }
        </div>
        {/* <Address className={classes.Address} key={address.id} address_id={address.id} changePreferredAddress={(address_id) => this.changePreferredAddress(address_id)} /> */}

      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Addresses));





