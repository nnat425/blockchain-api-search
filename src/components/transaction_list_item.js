import React from 'react';

	const TransactionListItem = (props) => {


	const addressObject = props.addressData;
	const inputAddress = props.transaction.inputs;
	const outputAddress = props.transaction.out;
	const transactionObject = props.transaction;

	const transactionInputAddresses = inputAddress.map((transaction,index) => {
		return <p key={index}> {transaction.prev_out.addr} </p>
	});

	const transactionOutputAddresses = outputAddress.map((transaction,index) => {
		return <p key={index}> {transaction.addr} </p>
	});

	 
	const inputOrOutputAmount = () =>{
		for(let i = 0 ; i < transactionObject.out.length ; i++){
			if(addressObject.address == transactionObject.out[i].addr){
				return <span className="outAddressValue"> {transactionObject.out[i].value/100000000 + " BTC"} </span>;
			}
		}
		for(let i = 0 ; i < transactionObject.inputs.length ; i++){
		   if(addressObject.address == transactionObject.inputs[i].prev_out.addr){
		   		 return <span className="inputAddressValue"> {"-" + transactionObject.inputs[i].prev_out.value/100000000 + " BTC"} </span> ;
		   	}
		}
	}



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
							<p> &rarr; </p>
						</td>
						<td className="outputAddresses">
							{transactionOutputAddresses}
						</td>
						<td >
						    {inputOrOutputAmount()}
						</td>
					</tr>
				</tbody>

			</table>

		</div>
	);
};

export default TransactionListItem;