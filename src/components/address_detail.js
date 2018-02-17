import React from 'react';

const AddressDetail = ({addressInformation}) => {

return(
		<div className="address-information container-fluid">
			<div className="row">
				<div className="summary col-lg-6">
					<h3>Summary</h3>
					<p>Adress: {addressInformation.address}</p>
					<p>Hash 160: {addressInformation.hash160}</p>
				</div>
				<div className="totalTransactions col-lg-6">
					<h3>Transactions</h3>
					<p>No. Transactions: {addressInformation.n_tx}</p>
					<p>Total Received: {addressInformation.total_received}</p>
					<p>Total Sent: {addressInformation.total_sent} </p>
			</div>
			</div>
	</div>
	)

};

export default AddressDetail;