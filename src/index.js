import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
	return <div> Hi! </div>;  //This is jsx, babel does compiling to convert it to javascript
}

//Need to instantiate components before rendering to DOM

ReactDOM.render(<App />, document.querySelector('.container'));