import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Blockchain from 'blockchain.info/blockexplorer';
import SearchBar from './components/search_bar';

const API_URL = "https://blockchain.info" 


 Blockchain.getAddress("1BoatSLRHtKNngkdXEeobR76b53LETtpyT").then(function(result){
 	console.log(result);
 });
  

class App extends Component {
  render(){
	return (
		<div> 
		  <SearchBar />
		</div>
	);  //This is jsx, babel does compiling to convert it to javascript
  }
}

//Need to instantiate components before rendering to DOM

ReactDOM.render(<App />, document.querySelector('.container'));