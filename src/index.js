exports.min = function min (array) {
    if (typeof array != "undefined" && array != null && array.length != null
        && array.length > 0) {
        let z = array.sort( (a, b) => a - b );
        return z[0];
    }
    return 0;

}

exports.max = function max (array) {
    if (typeof array != "undefined" && array != null && array.length != null
        && array.length > 0) {
        let z = array.sort( (a, b) => b - a);
        return z[0];
    }
    return 0;
}

exports.avg = function avg (array) {
    if (typeof array != "undefined" && array != null && array.length != null
        && array.length > 0) {
        let z = array.reduce((a,b) => a+b);
        return z / array.length;
    }
 return 0;
}
