let dream = "Uwielbiam JavaScript";
let lie = "Jestem świetnym programistą";

function verificationLength(firstSentence, secondSentence) {
    if (firstSentence.length > secondSentence.length) {
        console.log(firstSentence);
    }
    else {
        console.log(secondSentence);
    }
}

verificationLength(dream, lie)

