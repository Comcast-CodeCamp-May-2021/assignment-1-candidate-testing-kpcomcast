const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters == 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question(`${question}`);
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // console.log(`Your Answer: ${candidateAnswer}\nCorrect Answer: ${correctAnswer}`);
  // if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  //   console.log("Correct!");
  // } else {
  //   console.log("Incorrect!");
  // }
  let score = 0
  let pass = ""

  for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      score += 1
    } else {
      score += 0
    }
  }

  let grade = (score / questions.length) * 100;

  if (grade >= 80) {
    pass = "PASSED"
  } else {
    pass = "FAILED"
  }

  console.log(`\nCandidate Name: ${candidateName}
1) ${questions[0]}
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswers[0]}

2) ${questions[1]}
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswers[1]}

3) ${questions[2]}
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswers[2]}

4) ${questions[3]}
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswers[3]}

5) ${questions[4]}
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswers[4]}

>>> Overall Grade: ${String(grade)}% (${score} of ${questions.length} responses correct) <<<
>>> Status: ${pass} <<<`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};