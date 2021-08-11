import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import '@fontsource/roboto';

// React Componenets
import Product from './Product';


const styles = (theme) => ({
  root: {
    boxSizing: 'border-box',
    display: 'inline-block',
  },
  box: {
    width: '1.1rem',
    height: '1.1rem',
    border: '2px solid black',
    boxSizing: 'border-box',
    transform: 'translate(0, 5px)',
  },
  dot: {
    width: '0.6rem',
    height: '0.6rem',
    margin: 'auto',
    borderRadius: '50%',
    transform: 'translate(0%, 17%)',
    boxSizing: 'border-box',
  }
});

class VegNonvegIconAP extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      
    });

  }

  render() {
    
    const { classes } = this.props;
  

    return (
      <div className={classes.root}>
        <div className={classes.box}>
          <div className={classes.dot} style={{ backgroundColor: (this.props.isVeg === true) ? 'green' : 'red' }}>
          </div>
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(VegNonvegIconAP);

