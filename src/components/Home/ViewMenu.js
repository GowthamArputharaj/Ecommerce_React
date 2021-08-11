import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

// React Components

// Images


// All styles here..
const styles = (theme) => ({
  viewMenuPaper: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    background: '#FFFFFF',

    margin: 'auto',

    [theme.breakpoints.only('sm')]: {
      margin: 'auto',
      left: '0',
    },

    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      left: '0',
    },

  },
  paper: {
    border: '2px solid #000',
    fontFamily: 'Roboto',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    borderWidth: '0px',

    position: 'fixed',
    width: '80%',
    height: '40vh',
    bottom: '20vh',
    left: '10%',
    transform: 'translate(0%, -15%)',
    margin: 'auto',
    boxSizing: 'border-box',

    zIndex: '16',

    [theme.breakpoints.only('sm')]: {
      width: '45vw',
      margin: 'auto',
      left: '27.5vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '28vw',
      margin: 'auto',
      left: '35.8vw',
    },

    overflowY: 'scroll',

  },
  modal: {},
  viewMenuItem: {
    marginTop: '1rem',
    marginBottom: '1rem',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '18px',

    color: '#24272C',
  },
  viewMenuButton: {
    position: 'fixed',
    bottom: '13vh',
    left: '33.33vw',
    margin: 'auto',

    background: '#FFFFFF',
    boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '38px',
    width: '8rem',

    zIndex: '16',


    [theme.breakpoints.only('sm')]: {
      margin: 'auto',
      left: '50vw',
      transform: 'translate(-50%, 0%)',
    },

    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      left: '50vw',
      transform: 'translate(-50%, 0%)',
    },

  },
  viewMenuButtonClose: {
    position: 'absolute',
    left: '40%',
    bottom: '10vh',

    background: '#FFFFFF',
    boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '38px',
    zIndex: '16',

  },
  backgroundBlur: {
    position: 'fixed',
    left: '0px',
    top: '0px',

    height: '100vh',
    width: '100vw',

    background: 'rgba(36, 39, 44, 0.3)',
    backdropFilter: 'blur(6px)',

    zIndex: '15 !important',

    [theme.breakpoints.only('sm')]: {
      width: '50vw',
      margin: 'auto',
      left: '25vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '33.33vw !important',
      margin: 'auto',
      left: '33.33vw',
    },

  },



});


// Redux
const mapStateToProps = (state) => ({
  categories: state.shop.categories,
});

const mapDispatchToProps = {
  // 
};



// ViewMenu Field
class ViewMenu extends Component {
  constructor(props) {
    super(props);

    this.toggleOverViewMenu = this.toggleOverViewMenu.bind(this)

    this.state = ({
      visibility: false,
    });

  }

  toggleOverViewMenu = () => {
    var stat = this.state.visibility;

    this.setState({
      visibility: !stat,
    });

    if (this.state.visibility === false) {

      document.querySelector('#header').classList.add('negative_z_index');
      document.querySelector('#footer').classList.add('negative_z_index');
      // document.querySelector('body').classList.add('dont_scroll');

    } else {

      document.querySelector('#header').classList.remove('negative_z_index');
      document.querySelector('#footer').classList.remove('negative_z_index');
      // document.querySelector('body').classList.remove('dont_scroll');

    }


  };


  render() {

    const { classes } = this.props;

    const categories = this.props.categories;


    return (
      <Paper component="form" className={classes.viewMenuPaper} >
        <Button
          variant="text"
          onClick={this.toggleOverViewMenu}
          className={classes.viewMenuButton}
          id="oriViewMenuBtn"
        >
          View Menu
        </Button>


        <Button
          variant="text"
          onClick={this.toggleOverViewMenu}
          className={this.state.visibility === false ? classes.viewMenuButton + ' show' : classes.viewMenuButton + ' hide'}
        >
          View Menu
        </Button>


        <div
          // role="button" 
          className={this.state.visibility === true ? classes.backgroundBlur : ''}
          style={{ position: 'fixed', }}
          onClick={this.toggleOverViewMenu}
        ></div>

        <div
          id="menuItemPaperDiv"
          className={this.state.visibility === true ? 'show' : 'hide'}
          style={{ width: '100%', margin: 'auto', height: '100vh !important', }}
        >
          <div
            className={classes.paper}
            id="menuItemPaper"
          >
            {
              categories.map((category, index) => {
                return (
                  <p
                    className={classes.viewMenuItem}
                    key={category.id}
                  >
                    <Link
                      to={'/menu-details/' + category.id}
                      style={{ textDecorationLine: 'none', color: 'black', }}
                    >
                      {category.category_title} ({category.products.length})
                    </Link>
                  </p>
                )
              })
            }
          </div>
        </div>
        {/* </div> */}
        {/* </Fade>
        </Modal> */}
      </Paper>
    )

  }

}





export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ViewMenu));

