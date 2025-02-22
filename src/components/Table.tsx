import { useState } from 'react';
import { transactions } from './output';

const Table = () => {
	const [reveal, setReveal] = useState(false);
	return (
		<>
			<h2>Customer Data</h2>
			<button
				onClick={() => {
					setReveal(!reveal);
				}}
			>
				Click to reveal data in Table format
			</button>
			{reveal && (
				<table>
					<thead>
						<tr>
							<th>Sales Staff ID</th>
							<th>Transaction Time</th>
							<th>Total Products Sold</th>
							<th>Sale Amount</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((data, index) => (
							<tr key={index}>
								<td>{data.salesStaffId}</td>
								<td>{data.transactionTime}</td>
								<td>
									{data.products.map((product, index) => (
										<span key={index}>
											(Product: {product.productId}, total: {product.quantity})
										</span>
									))}
								</td>
								<td>{data.saleAmount}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default Table;

// A single line in a transaction file stores information related to 1 transaction in a comma-separated format. The information present is:

// salesStaffId

// transaction time

// The products sold. (format “[productId1:quantity|productId2:quantity]”)

// sale amount

// Example for a line in a transaction file: “4,2025-01-01T16:58:53,[726107:5|553776:5],2114.235”
