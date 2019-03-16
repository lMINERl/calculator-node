const filterTypes = require('./filters')
const operations = require('../operations');
const operationType = require('../operations/operationTypes');
const cleaner = require('./cleaner');

module.exports = (args) => {

    let { parserType, params } = cleaner(...args);
    
    let result;
    
    switch (parserType) {
        case filterTypes.flag():
            result = args.slice(2)
                .filter(arg => arg.startsWith(`--`))
                .map(arg => arg.split(`--`)[1])
                .map(arg => arg.toLowerCase())
                .find(arg => {
                    return operationType.operation[arg];
                });
            break;

        case filterTypes.simple():
            result = args.slice(2)
                .map(arg => arg.toLowerCase())
                .find(arg => {
                    return operationType.operation[arg];
                });
            break;
    }
    
    if (result) {
        result = operations[result](...params)
    }else{
        result = "invalid command"
    }
    return result
};