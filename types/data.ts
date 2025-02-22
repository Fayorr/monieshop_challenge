interface Product {
	productId: number;
	quantity: number;
}
export interface Data {
	saleStaffId: number;
	transactionTime: Date;
	productsSold: Product[];
	saleAmount: number;
}
