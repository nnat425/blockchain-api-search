import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term:''};
	}

	render(){
	    return (
		   <div className="search-bar col-lg-6">
			 <input 
			 	value={this.state.term}
			 	onChange={event => this.onInputChange(event.target.value)} />
		   </div>
		)
	}



	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
		this.props.updateAddress(term);
	}
}

export default SearchBar;  