import { transactions } from './src/components/output.ts';

export function getHighestSalesVolume(): number {
	let totalProductsSold = 0;
	transactions.forEach((data) => {
		if (data.products.length > totalProductsSold) {
			totalProductsSold = data.products.length;
		}
	});
	return totalProductsSold;
}

export function getHighestSalesValue(): number {
	let highestSale = 0;
	transactions.forEach((data) => {
		if (data.saleAmount > highestSale) {
			highestSale = data.saleAmount;
		}
	});
	return highestSale;
}
export function getMostSoldProduct(): string {
	const products: { [key: string]: number } = {};
	transactions.forEach((data) => {
		data.products.forEach((product) => {
			const { productId, quantity } = product;
			if (products[productId]) {
				products[productId] += quantity;
			} else {
				products[productId] = quantity;
			}
		});
	});

	let mostSoldProductId = '';
	let maxQuantity = 0;
	for (const productId in products) {
		if (products[productId] > maxQuantity) {
			maxQuantity = products[productId];
			mostSoldProductId = productId;
		}
	}

	return mostSoldProductId;
}
export function getHighestSalesStaffId(): string {
	let highestSale = 0;
	let staffId = 0;
	transactions.forEach((data) => {
		if (data.saleAmount > highestSale) {
			highestSale = data.saleAmount;
			staffId = data.salesStaffId;
		}
	});
	return `staff ID ${staffId} with a total of ${highestSale}`;
}

export function getHighestHourOfAverageTransactionVolume(): number {
	let highestHour = 0;
	let highestVolume = 0;
	const hours: { [key: number]: number } = {};
	transactions.forEach((data) => {
		const hour = new Date(data.transactionTime).getHours();
		if (hours[hour]) {
			hours[hour] += 1;
		} else {
			hours[hour] = 1;
		}
	});

	for (const hour in hours) {
		if (hours[hour] > highestVolume) {
			highestVolume = hours[hour];
			highestHour = parseInt(hour);
		}
	}

	return highestHour;
}
