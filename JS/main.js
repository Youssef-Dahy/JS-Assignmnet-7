// Start of Question one
function printNumber() {
  var userInput = document.getElementById("userInput").value;

  document.getElementById("output").innerHTML = "Output: " + userInput;
}
// End of Question one

// Start of Question two
function DivideNumber() {
  var userInputDivide = document.getElementById("InputDivide").value;
  if (userInputDivide % 3 === 0 && userInputDivide % 4 === 0) {
    document.getElementById("outputDivide").innerHTML = "Output: Yes";
  } else {
    document.getElementById("outputDivide").innerHTML = "Output: No";
  }
}
// End of Question two

// Start of Question three
function findMax() {
  var num1 = Number(document.getElementById("number1").value);
  var num2 = Number(document.getElementById("number2").value);
  var maxNumber = Math.max(num1, num2);
  document.getElementById("outPutMax").innerHTML = "Output: " + maxNumber;
}
// End of Question three

// Start of Question four
function checkPositiveNegative() {
  var userInput = Number(document.getElementById("userInputPositive").value);
  if (userInput < 0) {
    document.getElementById("outPutPositiveNegative").innerHTML =
      "Output: Negative";
  } else if (userInput > 0) {
    document.getElementById("outPutPositiveNegative").innerHTML =
      "Output: Positive";
  } else {
    document.getElementById("outPutPositiveNegative").innerHTML =
      "Output: Zero is neither positive nor negative";
  }
}
// End of Question four

// Start of Question Five
function findMaxMin() {
  var num1 = Number(document.getElementById("element1").value);
  var num2 = Number(document.getElementById("element2").value);
  var num3 = Number(document.getElementById("element3").value);
  var maxNumber = Math.max(num1, num2, num3);
  var minNumber = Math.min(num1, num2, num3);
  document.getElementById("outPutMinMax").innerHTML =
    "Max element = " + maxNumber + "<br>Min element = " + minNumber;
}
// End of Question Five

// Start of Question Six
function checkEvenOdd() {
  var userInput = Number(document.getElementById("evenOddInput").value);
  if (userInput % 2 === 0) {
    document.getElementById("outputEvenOdd").innerHTML = "Output: even";
  } else {
    document.getElementById("outputEvenOdd").innerHTML = "Output: odd";
  }
}
// End of Question Six

// Start of Question Seven
function checkVowelConsonant() {
  var userInput = document.getElementById("userInputVowel").value.toUpperCase();
  if (
    userInput === "A" ||
    userInput === "E" ||
    userInput === "I" ||
    userInput === "O" ||
    userInput === "U"
  ) {
    document.getElementById("outputVowel").innerHTML = "Output: Vowel";
  } else {
    document.getElementById("outputVowel").innerHTML = "Output: Consonant";
  }
}
// End of Question Seven

// Start of Question eight
function printNumbers() {
  var userInput = Number(
    document.getElementById("userInputPrintNumbers").value
  );
  var outputString = "Output: ";
  for (var i = 1; i <= userInput; i++) {
    outputString += i;
    if (i < userInput) {
      outputString += ", ";
    }
  }
  document.getElementById("outputPrintNumbers").innerHTML = outputString;
}
// End of Question eight

// Start of Question Nine
function printMultiplicationTable() {
  var userInput = Number(
    document.getElementById("userInputMultiplication").value
  );
  var outputString = "Output: ";
  for (var i = 1; i <= 12; i++) {
    outputString += userInput * i;
    if (i < 12) {
      outputString += " ";
    }
  }
  document.getElementById("outPutMultiplication").innerHTML = outputString;
}
// End of Question Nine

// Start of Question Ten
function printEvenNumbers() {
  var userInput = Number(document.getElementById("userInputEvenNumbers").value);
  var outputString = "Output: ";
  for (var i = 2; i <= userInput; i += 2) {
    outputString += i;
    if (i < userInput - 1) {
      outputString += " ";
    }
  }
  document.getElementById("outPutEvenNumbers").innerHTML = outputString;
}
// End of Question Ten

// Start of Question eleven
function calculatePower() {
  var base = Number(document.getElementById("baseInput").value);
  var exponent = Number(document.getElementById("exponentInput").value);
  var result = Math.pow(base, exponent);
  document.getElementById("outputPower").innerHTML = "Output: " + result;
}
// End of Question eleven

// Start of Question twelve
function calculateMarks() {
  var marks1 = Number(document.getElementById("marks1").value);
  var marks2 = Number(document.getElementById("marks2").value);
  var marks3 = Number(document.getElementById("marks3").value);
  var marks4 = Number(document.getElementById("marks4").value);
  var marks5 = Number(document.getElementById("marks5").value);
  var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
  var averageMarks = totalMarks / 5;
  var percentage = (totalMarks / 500) * 100;
  document.getElementById("outPutMarks").innerHTML =
    "Total Marks = " +
    totalMarks +
    "<br>" +
    "Average Marks = " +
    averageMarks +
    "<br>" +
    "Percentage = " +
    percentage.toFixed(2) +
    "%";
}
// End of Question twelve

// Start of Question thirteen
function calculateDaysInMonth() {
  var monthNumber = Number(document.getElementById("monthNumber").value);
  if (monthNumber >= 1 && monthNumber <= 12) {
    var daysInMonth;
    if (
      monthNumber === 1 ||
      monthNumber === 3 ||
      monthNumber === 5 ||
      monthNumber === 7 ||
      monthNumber === 8 ||
      monthNumber === 10 ||
      monthNumber === 12
    ) {
      daysInMonth = 31;
    } else if (
      monthNumber === 4 ||
      monthNumber === 6 ||
      monthNumber === 9 ||
      monthNumber === 11
    ) {
      daysInMonth = 30;
    } else if (monthNumber === 2) {
      daysInMonth = 28;
    }
    document.getElementById("outPutMonthNumber").innerHTML =
      "Days in Month: " + daysInMonth;
  } else {
    document.getElementById("outPutMonthNumber").innerHTML =
      "Invalid month number. Please enter a number between 1 and 12.";
  }
}
// End of Question thirteen

// Start of Question fourteen
function calculatePercentageAndGrade() {
  var physicsMarks = Number(document.getElementById("physicsMarks").value);
  var chemistryMarks = Number(document.getElementById("chemistryMarks").value);
  var biologyMarks = Number(document.getElementById("biologyMarks").value);
  var mathematicsMarks = Number(
    document.getElementById("mathematicsMarks").value
  );
  var computerMarks = Number(document.getElementById("computerMarks").value);
  var totalMarks =
    physicsMarks +
    chemistryMarks +
    biologyMarks +
    mathematicsMarks +
    computerMarks;
  var percentage = (totalMarks / 500) * 100;
  var grade;
  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else {
    grade = "F";
  }
  document.getElementById("outPutGrade").innerHTML =
    "Total Marks = " +
    totalMarks +
    "<br>" +
    "Percentage = " +
    percentage.toFixed(2) +
    "%<br>" +
    "Grade = " +
    grade;
}
// End of Question fourteen

// Start of Question fifteen
function calculateDaysInMonthWithSwitch() {
  var monthNumber = Number(
    document.getElementById("monthNumberWithSwitch").value
  );
  if (monthNumber >= 1 && monthNumber <= 12) {
    var daysInMonth;
    switch (monthNumber) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysInMonth = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        daysInMonth = 30;
        break;
      case 2:
        daysInMonth = 28;
        break;
    }
    document.getElementById("outputNumberWithSwitch").innerHTML =
      "Days in Month: " + daysInMonth;
  } else {
    document.getElementById("outputNumberWithSwitch").innerHTML =
      "Invalid month number. Please enter a number between 1 and 12.";
  }
}
// End of Question fifteen

// Start of Question sixteen
function checkVowelConsonantSwitch() {
  var alphabet = document.getElementById("alphabet").value.toLowerCase();
  var result;
  switch (alphabet) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      result = "Vowel";
      break;
    default:
      result = "Consonant";
  }
  document.getElementById("outPutVowelConsonantSwitch").innerHTML =
    "Output: " + result;
}
// End of Question sixteen

// Start of Question seventeen
function findMaxSwitch() {
  var num1 = Number(document.getElementById("number1Switch").value);
  var num2 = Number(document.getElementById("number2Switch").value);
  var maxNumber;
  switch (true) {
    case num1 > num2:
      maxNumber = num1;
      break;
    case num2 > num1:
      maxNumber = num2;
      break;
    default:
      maxNumber = "Both numbers are equal.";
  }
  document.getElementById("outPutMaxSwitch").innerHTML = "Output: " + maxNumber;
}
// End of Question seventeen

// Start of Question eighteen
function checkEvenOddSwitch() {
  var number = Number(document.getElementById("numberEvenSwitch").value);
  var result;
  switch (number % 2) {
    case 0:
      result = "Even";
      break;
    case 1:
      result = "Odd";
      break;
    default:
      result = "Invalid input";
  }
  document.getElementById("outPutEvenOddSwitch").innerHTML =
    "Output: " + result;
}
// End of Question seventeen

// Start of Question Nineteen
function checkNumberPositiveNegative() {
  var number = Number(document.getElementById("numberPostiveSwitch").value);
  var result;
  switch (true) {
    case number > 0:
      result = "Positive";
      break;
    case number < 0:
      result = "Negative";
      break;
    case number === 0:
      result = "Zero";
      break;
    default:
      result = "Invalid input";
  }
  document.getElementById("outputPostiveSwitch").innerHTML =
    "Output: " + result;
}
// End of Question Nineteen

// Start of Question twenty
function calculatorSwitch() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;
  var result;
  switch (operation) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  document.getElementById("outputCalculatorSwitch").innerHTML =
    "Result: " + result;
}
// End of Question twenty
