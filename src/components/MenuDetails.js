import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {increment, decrement} from '../actions';

// import { Grid } from '@material-ui/core';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';

// React Components
import Products from './MenuDetails/Products.js';
import ViewMenu from './Home/ViewMenu.js';
import Footer from './Home/Footer.js';
import NavigationBar from './Home/NavigationBar.js';

// Images


// All styles here..
const styles = (theme) => ({
	root: {
		width: '100%',
		boxSizing: 'border-box',
		minHeight: '100vh',
		[theme.breakpoints.up('md')]: {
			// width: '33.33vw',
			width: '100%',
			margin: 'auto',
			// left: '0',
		},
	},
	Products: {
		marginTop: '22rem',
		marginBottom: '50vh',
	},
	ViewMenu: {
		// 
	}
});


// Redux

const mapStateToProps = (state) => ({
	cart_details: state.shop.cart_details,
});


const mapDispatchToProps = {
	// 
}


// MenuDetails
class MenuDetails extends Component {
	constructor(props) {
		super(props);

		console.log(this.props.match.params.category_id);

		this.state = ({
			// category_id: parseInt(this.props.match.params.category_id),
		});
	}

	render() {

		const category_id = parseInt(this.props.match.params.category_id);

		const { classes } = this.props;

		const cart_details = this.props.cart_details;

		return (
			<div className={classes.root}>

				<NavigationBar />
				{/* <br></br> */}
				<br></br>
				<br></br>
				<br></br> 

				<div style={{ minHeight: '60vh', }}>
					<Products className={classes.Products} category_id={category_id} />
					<ViewMenu className={classes.ViewMenu} />
				</div>
				<Footer cart_calculations={cart_details} />
			</div>
		);

	}

}



// export default withStyles(styles)(MenuDetails);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuDetails));

