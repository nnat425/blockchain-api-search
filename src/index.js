import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_URL = "https://blockchain.info" 

const App = () => {
	return (
		<div> 
		<SearchBar />
		</div>
	 		);  //This is jsx, babel does compiling to convert it to javascript
}

//Need to instantiate components before rendering to DOM

ReactDOM.render(<App />, document.querySelector('.container'));