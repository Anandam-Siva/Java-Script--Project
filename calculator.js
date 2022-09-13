var sum, mult, subt, divi;
var d;

function calculator(var1, operation, var2) {
    if (operation === "sum") {
        return d = var1 + var2;
    } else if (operation === "mult") {
        return d = var1 * var2;
    } else if (operation === "subt") {
        return d = var1 - var2;
    } else if (operation === "divi") {
        return d = var1 / var2;
    }
}
var z, y;
var sin, cos, sec, tan, cot, cosec;

function trigonametry(t, x) {

    y = x * ((Math.PI) / 180);

    if (t === "sin") {
        console.log(Math.sin(y));

    } else if (t === "cos") {
        console.log(Math.cos(y));

    } else if (t === "tan") {
        console.log(Math.tan(y));

    } else if (t === "cot") {
        console.log(Math.cot(y));

    } else if (t === "cosec") {
        console.log(Math.cosec(y));

    } else if (t === "sec") {
        console.log(Math.sec(y));

    }
}
trigonametry("sin", 0);





