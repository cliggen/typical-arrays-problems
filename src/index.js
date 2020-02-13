
exports.min = function min (array) {
    if (typeof array != "undefined" && array != null && array.length != null
        && array.length > 0) {
        let z = Math.min.apply(null, array);
        return z;
    }
    return 0;

}

exports.max = function max (array) {
    if (typeof array != "undefined" && array != null && array.length != null
        && array.length > 0) {
        let z = Math.max.apply(null, array);
        return z;
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
