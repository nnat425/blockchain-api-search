import React from 'react';

constant AddressDetail = (transaction) => {

return(
		<div className="information col-md-8">
			<div className="summary">
				<h3>Summary</h3>
				<p>Adress: {transaction.address}</p>
				<p>Hash 160: {transaction.hash160}</p>
			</div>
			<div className="totalTransactions">
				<h3>Transactions</h3>
				<p>No. Transactions: {transaction.n_tx}</p>
				<p>Total Received: {transaction.total_received}</p>
				<p>Total Sent: {transaction.total_sent} </p>
			</div>
	</div>
	)

};

export default AddressDetail;