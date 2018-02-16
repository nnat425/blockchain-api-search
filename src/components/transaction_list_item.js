import React from 'react';

const TransactionListItem = ({transaction}) => {

	const inputAddress = transaction.inputs
	const outputAddress = transaction.out


	const transactionInputAddresses = inputAddress.map((transaction,index) => {
		return <p key={index}> {transaction.prev_out.addr} </p>
	});

	const transactionOutputAddresses = outputAddress.map((transaction,index) => {
		return <p key={index}> {transaction.addr} </p>
	});

	//const transaction = props.transaction line 4 same as parameter passed in line 3
	//console.log(transaction);
	return (
		<div className="list-group-item">
			<table className="table table-striped">
				<tbody>
					<tr>
						<th colSpan="3" align="left">
							<p> Hash </p>
						</th>
					</tr>
					<tr>
						<td>
						{transactionInputAddresses}
						</td>
						<td>
							<p> -----> </p>
						</td>
						<td>
						{transactionOutputAddresses}
							<span className="pull-right">
								<span> 0.0123456 </span>
							</span>
						</td>
					</tr>
				</tbody>

			</table>

		</div>
	);
};

export default TransactionListItem;