#!/usr/bin/env node
const parsers = require('./parsers');
// const operations = require('./operations');



//clean the argv input



if (process.argv[2] === '--help') {
    console.log(`you can specify the parser using: 
    --parser=parserName where parserName [flag | simple]`);
    return;
}



// const sample = ['C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\MINER\\Documents\\ITI_ISMAILIA_CALC\\calc.js',
//     '--parser=flag', '5', '2', '1','--multiply'];


const result = parsers['parse'](process.argv);
console.log(result);

// console.log(userSelectedParser);


// const { operation, operands } = parser(process.argv);
// const { operation, operands } = parser(sample);

// const mathematicOperation = operations[operation];

// const result = mathematicOperation(...operands);



