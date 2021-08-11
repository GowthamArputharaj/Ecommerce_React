import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {increment, decrement} from '../actions';

// import { Grid } from '@material-ui/core';


// Material UI Components
import { withStyles } from '@material-ui/core/styles';

// React Components
import ShopImage from './Home/ShopImage.js';
import SearchShop from './Home/SearchShop.js';
import Products from './Home/Products.js';
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


// Home
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = ({

		});
	}

	render() {

		const { classes } = this.props;

		const cart_details = this.props.cart_details;

		var main_search_shop = '';

		const searchFieldHandle = (event) => {
			let target_name = event.target.name;
			let target_value = event.target.value;

			console.log(target_name, target_value);

			// this.setState({
			// 	[target_name]: target_value,
			// });
			main_search_shop = main_search_shop + target_value;
		}

		return (
			<div className={classes.root}>

				<NavigationBar />
				{/* <br></br> */}
				<br></br>
				<br></br>
				<br></br> 
					
				<ShopImage />
				<div style={{ minHeight: '60vh', }}>
					<SearchShop main_search_shop={main_search_shop} onChange={searchFieldHandle} />
					<Products className={classes.Products} />
					<ViewMenu className={classes.ViewMenu} />
				</div>
				<Footer cart_calculations={cart_details} />
			</div>
		);

	}

}



// export default withStyles(styles)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));

