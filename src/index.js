import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Blockchain from 'blockchain.info/blockexplorer';
import SearchBar from './components/search_bar';
import TransactionList from './components/transaction_list';
import AddressDetail from './components/address_detail';

const API_URL = "https://blockchain.info" 



  

class App extends Component {
	constructor(props){
		super(props);

		this.state = { transactions: [], 
					   addressInformation:''
					 };
		this.addressSearch("1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
	
	}



	addressSearch(term){
		Blockchain.getAddress(term).then(data => {
 			this.setState({transactions:data.txs,addressInformation:data});
 		});
	}





  render(){
	return (
		<div> 
		  <SearchBar onSearchTermChange={term => this.addressSearch(term)} />
		  <AddressDetail addressInformation={this.state.addressInformation} />
		  <TransactionList transactions={this.state.transactions} />
		</div>
	);  //This is jsx, babel does compiling to convert it to javascript
  }
}

//Need to instantiate components before rendering to DOM

ReactDOM.render(<App />, document.querySelector('.container'));