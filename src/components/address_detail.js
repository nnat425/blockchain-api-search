import React from 'react';

const AddressDetail = ({addressInformation}) => {

return(
		<div className="information-detail col-md-8">
			<div className="summary">
				<h3>Summary</h3>
				<p>Adress: {addressInformation.address}</p>
				<p>Hash 160: {addressInformation.hash160}</p>
			</div>
			<div className="totalTransactions">
				<h3>Transactions</h3>
				<p>No. Transactions: {addressInformation.n_tx}</p>
				<p>Total Received: {addressInformation.total_received}</p>
				<p>Total Sent: {addressInformation.total_sent} </p>
			</div>
	</div>
	)

};

export default AddressDetail;