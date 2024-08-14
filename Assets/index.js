function getValidInput(subjectName) {
    var input;
    var isValid = false;

    while (!isValid) {
        input = prompt("Enter Your Number for " + subjectName + " (0-100):", "0");

        if (/^(100|[1-9]?[0-9])$/.test(input)) {
            isValid = true;
        } else {
            alert("Invalid input. Please enter a number between 0 and 100.");
        }
    }

    return parseInt(input, 10);
}

var Subject1 = getValidInput("Mathematics");
var Subject2 = getValidInput("English");
var Subject3 = getValidInput("Urdu");
var Subject4 = getValidInput("Computer");
var Subject5 = getValidInput("Science");

var totalSubject = Subject1 + Subject2 + Subject3 + Subject4 + Subject5;

var percentage = (totalSubject / 500) * 100;

if (percentage >= 90) {
    alert("Your grade is A+. Percentage: " + percentage + "%");
} else if (percentage >= 80) {
    alert("Your grade is A. Percentage: " + percentage + "%");
} else if (percentage >= 70) {
    alert("Your grade is B. Percentage: " + percentage + "%");
} else if (percentage >= 60) {
    alert("Your grade is C. Percentage: " + percentage + "%");
} else if (percentage >= 50) {
    alert("Your grade is D. Percentage: " + percentage + "%");
} else {
    alert("Your grade is F. Percentage: " + percentage + "%");
}
