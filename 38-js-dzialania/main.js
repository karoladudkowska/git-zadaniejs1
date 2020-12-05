
function numbers(num1, num2) {
    let resultAdding = num1 + num2;
    if (resultAdding > 0) {
        console.log("Wynik dodawania wynosi " + resultAdding + ".");
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
    let resultSubstraction = num1 - num2;
    if (resultSubstraction > 0) {
        console.log("Wynik odejmowania wynosi " + resultSubstraction + ".");
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
    let resultMultiplication = num1 * num2;
    if (resultMultiplication > 0) {
        console.log("Wynik mnożenia wynosi " + resultMultiplication + ".");
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
}

numbers(5, 10);