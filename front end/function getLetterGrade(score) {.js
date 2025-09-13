function getLetterGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
    return 'D';
  } else {
  } else if (score >= 60) {
    return 'F';
  }
}

// Example usage:
const studentScore = 85;
const letterGrade = getLetterGrade(studentScore);

console.log(`A student with a score of ${studentScore} receives a grade of ${letterGrade}.`);