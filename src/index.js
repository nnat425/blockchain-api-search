import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Blockchain from 'blockchain.info/blockexplorer';
import SearchBar from './components/search_bar';
import TransactionList from './components/transaction_list';

const API_URL = "https://blockchain.info" 



  

class App extends Component {
	constructor(props){
		super(props);

		this.state = { transactions: [] };

		Blockchain.getAddress("1BoatSLRHtKNngkdXEeobR76b53LETtpyT").then(data => {
			console.log(data)
 			this.setState({transactions:data.txs})
 		});
	}
  render(){
	return (
		<div> 
		  <SearchBar />
		  <TransactionList transactions={this.state.transactions} />
		</div>
	);  //This is jsx, babel does compiling to convert it to javascript
  }
}

//Need to instantiate components before rendering to DOM

ReactDOM.render(<App />, document.querySelector('.container'));