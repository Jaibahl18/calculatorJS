const textBar = document.querySelector("#textBar");

function textAppend(value) {
    textBar.value = textBar.value + (value);
}

function equal() {
    textBar.value = compute();
}

function clearText() {
    textBar.value = '';
}

function compute() {
    try {
        return (eval(textBar.value).toFixed(2));
    }
    catch {
        return "Error"
    }
}