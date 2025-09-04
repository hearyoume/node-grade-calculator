// Grade calculation constants
const GRADE_A_THRESHOLD = 90;
const GRADE_B_THRESHOLD = 80;
const GRADE_C_THRESHOLD = 70;
const GRADE_D_THRESHOLD = 60;

const calculateLetterGrade = (numericGrade) => {
  if (numericGrade >= GRADE_A_THRESHOLD) {
    return "A";
  } else if (numericGrade >= GRADE_B_THRESHOLD) {
    return "B";
  } else if (numericGrade >= GRADE_C_THRESHOLD) {
    return "C";
  } else if (numericGrade >= GRADE_D_THRESHOLD) {
    return "D";
  }
  return "F";
};
