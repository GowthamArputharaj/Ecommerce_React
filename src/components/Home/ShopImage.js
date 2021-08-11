import React from 'react'

// Material UI Components
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// React Components

// Images
import main_image from '../../images/store.jpg';

// All styles here..
const useStyles = makeStyles((theme) => ({
	main_image_MOBILE: {
		width: '100%',
		height: '35vh',
		zIndex: -1,
		backgroundImage: `url(${main_image})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		// marginTop: '3.9rem',
	},
	main_image: {
		width: '100%',
		height: '100vh',
		zIndex: -1,
		backgroundImage: `url(${main_image})`,
	},
}));

// Shop Image
function ShopImage(props) {
	const classes = useStyles();
	return (
		<Paper  component="form" className={classes.main_image_MOBILE}>
		</Paper>
	)
}

export default ShopImage;

