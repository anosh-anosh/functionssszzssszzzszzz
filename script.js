let funcx;
let gfuncx;
let x;
let preference;
let result = document.querySelector("#result");
let isLetter = /[a-z]/i; // these are regex stuff btw. this one only allows letters a-z, but in any case
let isInt = /^\d+$/; // only integers
let isSymbol = /^([-+/*^])/ // only -, +, /, * and ^


function parseFunc(string) {
    let func = string.split("");
    let newFunc = "";
    let lastElement;

    // for each element, find if it is an integer, symbol or a variable, and react accordingly.
    func.forEach(element => { // wow this function was shortened so much
        // fixing exponents
        if (element === '^') {
            element = '**'
        }
        // ensure that multiplication occurs between a number and a variable.
        if (isInt.test(lastElement) && isLetter.test(element)) {
            newFunc += `*`
        }
        newFunc += element;
        lastElement = element;
    });

    return newFunc;
}

function calc(y, uinput) {
    let func = parseFunc(uinput)
    funccalc = new Function(`x`, `return ${func}`)
    return funccalc(y);
}

function submit() {
    funcx = document.querySelector("#funcx").value;
    gfuncx = document.querySelector("#gfuncx").value;
    x = document.querySelector("#x").value;
    preference = document.querySelector('[name="preference"]:checked').value
    result = document.querySelector("#result")
    
    result.innerHTML = `f(x) = ${funcx} \n g(x) = ${gfuncx} \n x = ${x} \n preference = ${preference}`;
}



// let examplefunc = "3x + 2"

// console.log(parseFunc(examplefunc))


