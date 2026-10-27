function calculateGrade(mark) {
    if (mark < 0 || mark > 100) {
        return "Invalid Marks";
    } else if (mark >= 80) {
        return "A+";
    } else if (mark >= 70) {
        return "A";
    } else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else if (mark >= 40) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(85));