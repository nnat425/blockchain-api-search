import React from 'react';

const TransactionListItem = ({transaction}) => {

	//const transaction = props.transaction line 4 same as parameter passed in line 3
	console.log(transaction);
	return (
		<div className="list-group-item">
			<table className="table table-striped">
				<tbody>
					<tr>
						<th colspan="3" align="left">
							<p> Hash </p>
						</th>
					</tr>
					<tr>
						<td>
							<p> Address </p>
						</td>
						<td>
							<p> -----> </p>
						</td>
						<td>
							<p> Address 2 </p>
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