module.exports = (...args) => {
    
    const parserType = args.slice(2)
        .find(arg => arg.startsWith(`--parser`)).split('--parser=')[1];

        
    const params = args.slice(2)
        .filter(Number)
        .map(Number);

    return {parserType,params};
}