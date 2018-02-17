import React from 'react';

const TransactionListItem = ({transaction}) => {

	const inputAddress = transaction.inputs;
	const outputAddress = transaction.out;
	const transactionObject = transaction;

	const transactionInputAddresses = inputAddress.map((transaction,index) => {
		return <p key={index}> {transaction.prev_out.addr} </p>
	});

	const transactionOutputAddresses = outputAddress.map((transaction,index) => {
		return <p key={index}> {transaction.addr} </p>
	});


	
	const convertTime = String(new Date(transactionObject.time));
	console.log((convertTime));
	

	return (
		<div className="list-group-item">
			<table className="table table-striped">
				<tbody>
					<tr>
						<th colSpan="3" align="left">
							<p className="transaction-hash"> {transactionObject.hash} </p>
						</th>
						<th colSpan="2" align="left">
							<p className="transaction-d">{String(new Date(transactionObject.time * 1000))}</p>
						</th>
					</tr>
					<tr>
						<td className="inputAddresses">
						{transactionInputAddresses}
						</td>
						<td>
							<p> -----> </p>
						</td>
						<td>
						{transactionOutputAddresses}
							<span className="pull-right">
								<span>  </span>
							</span>
						</td>
					</tr>
				</tbody>

			</table>

		</div>
	);
};

export default TransactionListItem;