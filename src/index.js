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
					   addressInformation:'',
					   address:''
		};
		this.addressSearch("1BoatSLRHtKNngkdXEeobR76b53LETtpyT");
	}


	addressSearch(term){
		Blockchain.getAddress(term).then(data => {
			console.log(data);
			this.setState({transactions:data.txs,addressInformation:data});
		});
	}

	updateAddressInformation(term){
		clearInterval(this.interval);
		this.interval = setInterval( () => { 
			Blockchain.getAddress(term).then(data => {
				this.setState({transactions:data.txs,addressInformation:data});
			});
		},25000);
	}



	render(){
		return (
			<div> 
			<h1 className="index-header"> Blockchain Challenge </h1>
			<SearchBar onSearchTermChange={term => this.addressSearch(term)} updateAddress= {term => this.updateAddressInformation(term)} />
			<AddressDetail addressInformation={this.state.addressInformation} />
			<TransactionList transactions={this.state.transactions} addressData={this.state.addressInformation} />
			</div>
	);  
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));

