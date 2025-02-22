import { useState } from 'react';
import {
	getHighestSalesStaffId,
	getHighestSalesValue,
	getHighestSalesVolume,
	getMostSoldProduct,
	getHighestHourOfAverageTransactionVolume,
} from '../../functions';
const Display = () => {
	const [reveal, setReveal] = useState(false);
	const staffId = getHighestSalesStaffId();
	const totalProductsSold = getHighestSalesVolume();
	const highestSale = getHighestSalesValue();
	const mostSoldProductId = getMostSoldProduct();
	const highestHour = getHighestHourOfAverageTransactionVolume();
	return (
		<div>
			<button
				onClick={() => {
					setReveal(!reveal);
				}}
			>
				Click to reveal results for the 2024 files
			</button>
			{reveal && (
				<div>
					<p>1. Highest sales volume in a day is: {totalProductsSold}</p>
					<p>2. Highest sales value in a day is: {highestSale}</p>
					<p>3. Most sold product ID by volume is: {mostSoldProductId}</p>
					<p>4. Highest sales staff ID for each month is: {staffId}</p>
					<p>
						5. Highest hour of the day by average transaction volume is:{' '}
						{highestHour}:00
					</p>
				</div>
			)}
		</div>
	);
};
export default Display;
