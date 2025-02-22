// import { dataFile } from "./dataFile";
import { transactions } from "./output";

const Table = () => { 
    return (
        <>
        <h2>Customer Data</h2>
			<table>
				<tr>
					<th>Sales Staff ID</th>
					<th>Transaction Time</th>
					<th>Total Products Sold</th>
					<th>Sale Amount</th>
                </tr>
                <tbody>
                {transactions.map((data, index) => (
                    <tr key={index}>
                        <td>{data.salesStaffId}</td>
                        <td>{data.transactionTime}</td>
                        <td>{`${data.products}
                        `}</td>
                        <td>{data[3]}</td>
                        <td>{data[4]}</td>
                </tbody>
			</table>
        </>
		);
}

export default Table;

// A single line in a transaction file stores information related to 1 transaction in a comma-separated format. The information present is: 

// salesStaffId

// transaction time

// The products sold. (format “[productId1:quantity|productId2:quantity]”)

// sale amount

// Example for a line in a transaction file: “4,2025-01-01T16:58:53,[726107:5|553776:5],2114.235”