const CC = require('currency-converter-lt') // adding the library
let currencyConverter = new CC({ from: 'CZK', to: 'JPY', amount: 1 }) // creating class from the library, putting currencies and amount

currencyConverter.convert().then((response) => {
    console.log(`Result: ${response}`)
})