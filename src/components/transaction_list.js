import React from 'react';
import TransactionListItem from './transaction_list_item';

const TransactionList = (props) => {

	const transactionItems = props.transactions.map((transaction) => {
		return <TransactionListItem key={transaction.hash} transaction={transaction} />
	});

	return(
	  <ul className="transaction-list col-md-12 list-group">
	  	{transactionItems}
	  </ul>
	)
}

export default TransactionList;