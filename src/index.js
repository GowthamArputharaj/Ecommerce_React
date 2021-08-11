import React from 'react'
import ReactDOM from 'react-dom'
// Router
import { BrowserRouter } from 'react-router-dom';
// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

// Material UI Component

// css file
import './index.css';

// React Component
import Shop from './Shop.js';


const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
	<Provider store={store} >
		<BrowserRouter>
			<Shop />
		</BrowserRouter>,
	</Provider>
	,
	document.getElementById('root')
);



