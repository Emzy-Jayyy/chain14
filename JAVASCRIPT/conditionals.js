// IF / ELSE IF / ELSE -- the three-part decision maker

if ("have to make payment") {
    cons
} 
else {
    "No access to the classes";
}

const checkAge = (age) => {
    if (age >= 18) {
        return " Welcome in!"
    } else {
        return "Sorry , you must be 18  or over.";
    }
}

// MULTIPLE CONDITIONS  with else if
const getGrade = (score) => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(85)); // B

// TENARY OPERATOR - a shorthand for if/else statements
const isAdult = (age) => age>=18 ? 'Adult' : 'Minor';
console.log(isAdult(20));

// COMBINING CONDITIONS with && and ||
const canVote = (age, isCitizen) => {
    if (age >= 18 && isCitizen) {
        return "You can vote!";
    } else {
        return "You cannot vote.";
    }
};