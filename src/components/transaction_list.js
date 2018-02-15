import React from 'react';
import TransactionListItem from './transaction_list_item';

const TransactionList = (props) => {

	return(
	  <ul className="col-md-4 list-group">
	  	{props.transactions.length}
	  </ul>
	)
}

export default TransactionList;