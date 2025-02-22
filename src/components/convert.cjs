const fs = require('fs');
const readline = require('readline');
const path = require('path');

function parseTransactionLine(line) {
	const [salesStaffId, transactionTime, productsSold, saleAmount] =
		line.split(',');

	const products = productsSold
		.slice(1, -1)
		.split('|')
		.map((product) => {
			const [productId, quantity] = product.split(':');
			return {
				productId: parseInt(productId, 10),
				quantity: parseInt(quantity, 10),
			};
		});

	return {
		salesStaffId: parseInt(salesStaffId, 10),
		transactionTime,
		products,
		saleAmount: parseFloat(saleAmount),
	};
}

function processTransactionsFile(inputFilePath, outputFilePath) {
	s;
	if (!fs.existsSync(inputFilePath)) {
		console.error(`Error: File not found at ${inputFilePath}`);
		process.exit(1);
	}

	ut;
	const outputStream = fs.createWriteStream(outputFilePath);

	outputStream.write('const transactions = [\n');

	const rl = readline.createInterface({
		input: fs.createReadStream(inputFilePath),
		output: process.stdout,
		terminal: false,
	});

	let isFirstLine = true;

	rl.on('line', (line) => {
		const transaction = parseTransactionLine(line);

		if (!isFirstLine) {
			outputStream.write(',\n');
		} else {
			isFirstLine = false;
		}

		outputStream.write('  ' + JSON.stringify(transaction, null, 2));
	});

	rl.on('close', () => {
		outputStream.write('\n];\n');
		outputStream.end();
		console.log(`Output saved to ${outputFilePath}`);
	});

	rl.on('error', (err) => {
		console.error(`Error reading file: ${err.message}`);
		process.exit(1);
	});
}

const inputFilePath = path.join(__dirname, '2025-01-01.txt');
const outputFilePath = path.join(__dirname, 'output.ts');

processTransactionsFile(inputFilePath, outputFilePath);
