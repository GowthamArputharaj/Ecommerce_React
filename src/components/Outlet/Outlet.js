import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';


// React Componoentns

// Images
import front_image from '../images/front_image.jpg';



const styles = (theme) => ({
  root: {
    fontFamily: 'Roboto',
  },
  imageTextWrapper: {
    width: '100%',
    margin: 'auto',
  },
  preferredOutletWrapper: {
    marginTop: '1rem',
    width: '100%',
    position: 'absolute',
    margin: 'auto',
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
    backgroundColor: '#24272C',
    marginTop: '1rem',
  }

});


class Front extends Component {

  constructor(props) {
    super(props);

    this.state = ({

    });

  }

  render() {

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.imageTextWrapper}>
          <div className={classes.imageText}>
            <img src={front_image} alt="front image" style={{ width: '60%', }}></img>
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
              <div className={classes.outlet}>
                <div className={classes.outletTitle}>
                  Pizza Estd , C-scheme
                </div>
                <div className={classes.outletAddress}>
                  A-41, near deer park, C-scheme
                </div>
                <div className={classes.outletTime}>
                  10 AM to 10 PM
                </div>
                <hr className={classes.hr}></hr>
              </div>
              <div className={classes.outlet}>
                <div className={classes.outletTitle}>
                  Pizza Estd, Malviya Nagar
                </div>
                <div className={classes.outletAddress}>
                  B-341, Calgiri road, Malviya Nagar
                </div>
                <div className={classes.outletTime}>
                  10 AM to 10 PM
                </div>
                <hr className={classes.hr}></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(Front);

// export default MyCart;





