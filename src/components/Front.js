import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { unSelectAllOutlet, selectOutlet } from '../actions/index.js';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';


// React Componoentns

// Images
import front_frame from '../images/front_image.jpg';



const styles = (theme) => ({
  root: {
    fontFamily: 'Roboto',
    width: '100vw',
    
    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw',
      margin: 'auto',
      left: '33.33vw',
    },

  },
  imageTextWrapper: {
    
    // width: '100%',
    margin: 'auto',

  },
  preferredOutletWrapper: {
    width: '100vw',

    marginTop: '1rem',
    // width: '100%',
    position: 'absolute',
    margin: 'auto',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw',
      margin: 'auto',
      left: '33.33vw',
    },
  },
  imageText: {
    paddingTop: '2rem',
    width: '90%',
    boxSizing: 'border-box',
    textAlign: 'center',
    margin: 'auto',
  },
  preferredOutlet: {
    width: '100%',
    padding: '1rem',
    paddingBottom: '100%',

    height: '100%',
    boxSizing: 'border-box',
    margin: 'auto',
    background: '#FFFFFF',
    boxShadow: '0px -2px 18px rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',


  },
  outlets: {
    marginTop: '2rem',
  },
  outlet: {
  },
  text: {
    padding: '1rem',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#000000',
  },
  description: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    color: '#000000',
    opacity: '0.5',
    wordWrap: 'breakWord',
  },
  preferredOutletTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    textAlign: 'center',
    color: '#000000',

  },
  outletTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#000000',
    marginTop: '0.5rem',

  },
  outletAddress: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#000000',
    opacity: '0.7',
    marginTop: '0.5rem',
  },
  outletTime: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#000000',
    opacity: '0.7',
    marginTop: '0.5rem',
  },
  hr: {
    color: '#24272C',
    marginTop: '1rem',
  }

});


// Redux
const mapStateToProps = (state) => ({
  outlets: state.shop.outlets,
});

const mapDispatchToProps = {
  unSelectAllOutlet,
  selectOutlet,
}


class Front extends Component {

  constructor(props) {
    super(props);

    this.handleOutletClick = this.handleOutletClick.bind(this);

    this.state = ({
      canRedirect: false,
    });

  }

  handleOutletClick(outlet_id) {
    this.props.unSelectAllOutlet();
    this.props.selectOutlet(outlet_id);

    this.setState({
      canRedirect: true,
    })
  }

  render() {

    const { classes } = this.props;

    const outlets = this.props.outlets;

    return (
      <div className={classes.root}>
        <div className={classes.imageTextWrapper}>
          <div className={classes.imageText}>
            <img src={front_frame} alt="front " style={{ width: '60%', }}></img>
            <div className={classes.text}>
              <div className={classes.title}>
                Pizza ESTD.
              </div>
              <div className={classes.description}>
                He started his career, working as a Deputy Manager in Rajasthan Financial Corporation & Haryana Financial Corporation but his ambition was much greater.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.preferredOutletWrapper}>
          <div className={classes.preferredOutlet}>
            <span className={classes.preferredOutletTitle}>
              Select your prefered outlet
            </span>
            <div className={classes.outlets}>
              {
                outlets.map((outlet, index) => {
                  return (
                    <div key={index} >
                      <div onClick={() => this.handleOutletClick(outlet.id)} >
                        {/* <Link to="/home" style={{ textDecorationLine: 'none' }}> */}
                        <div className={classes.outlet}>
                          <div className={classes.outletTitle}>
                            {outlet.name}
                          </div>
                          <div className={classes.outletAddress}>
                            {outlet.address}
                          </div>
                          <div className={classes.outletTime}>
                            {outlet.timing}
                          </div>
                          <hr className={classes.hr}></hr>
                        </div>
                        {/* </Link> */}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {
          (this.state.canRedirect === true) ? (
            <Redirect to="/home" />
          ) : (
            <></>
          )
        }
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Front));

// export default MyCart;





