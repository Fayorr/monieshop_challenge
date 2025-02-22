const fs = require('fs');
const readline = require('readline');
const path = require('path');

// Function to parse a transaction line
function parseTransactionLine(line) {
	const [salesStaffId, transactionTime, productsSold, saleAmount] =
		line.split(',');

	const products = productsSold
		.slice(1, -1) // Remove the square brackets
		.split('|') // Split into individual products
		.map((product) => {
			const [productId, quantity] = product.split(':');
			return {
				productId: parseInt(productId, 10),
				quantity: parseInt(quantity, 10),
			};
		});

	return {
		salesStaffId: parseInt(salesStaffId, 10),
		transactionTime, // Keep the time as a string to avoid timezone conversion
		products,
		saleAmount: parseFloat(saleAmount),
	};
}

// Function to process the transactions file
function processTransactionsFile(inputFilePath, outputFilePath) {
	// Check if the input file exists
	if (!fs.existsSync(inputFilePath)) {
		console.error(`Error: File not found at ${inputFilePath}`);
		process.exit(1); // Exit the script with an error code
	}

	// Create a writable stream to save the output
	const outputStream = fs.createWriteStream(outputFilePath);

	// Write the TypeScript array opening
	outputStream.write('const transactions = [\n');

	// Read the transaction file line by line
	const rl = readline.createInterface({
		input: fs.createReadStream(inputFilePath),
		output: process.stdout,
		terminal: false,
	});

	let isFirstLine = true;

	rl.on('line', (line) => {
		const transaction = parseTransactionLine(line);

		// Add a comma before each object except the first one
		if (!isFirstLine) {
			outputStream.write(',\n');
		} else {
			isFirstLine = false;
		}

		// Write the parsed transaction to the output file as a TypeScript object
		outputStream.write('  ' + JSON.stringify(transaction, null, 2));
	});

	// Close the array and the stream when done
	rl.on('close', () => {
		outputStream.write('\n];\n');
		outputStream.end();
		console.log(`Output saved to ${outputFilePath}`);
	});

	// Handle file read errors
	rl.on('error', (err) => {
		console.error(`Error reading file: ${err.message}`);
		process.exit(1); // Exit the script with an error code
	});
}

// Paths to the input and output files
const inputFilePath = path.join(__dirname, '2025-01-01.txt');
const outputFilePath = path.join(__dirname, 'output.ts');

// Process the transactions file
processTransactionsFile(inputFilePath, outputFilePath);
