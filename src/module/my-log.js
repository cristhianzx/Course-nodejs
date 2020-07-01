module.exports.info = function info(text) { //module.exports.info -- esporta funciones de forma local
    console.log("INFO:", text);
    return (text);
}

module.exports.error = function error(text) {
    console.log("ERROR:", text);
    return (text);
}

//module.exports = (info, error); // exporta variables de forma global
//module.exports.info = info; // exportacion parcial d ela funcion info
//module.exports.error = error;//exportacion parcial de la funcion error