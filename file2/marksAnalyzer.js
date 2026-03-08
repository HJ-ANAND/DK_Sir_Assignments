function runMarksAnalyzer() {
  let marks = [];

  for (let i = 0; i < 5; i++) {
    let mark = Number(prompt("Enter mark " + (i + 1) + ":"));
    marks.push(mark);
  }

  let extraMark = Number(prompt("Enter an extra mark:"));
  marks.push(extraMark);

  marks.pop();

  console.log("All Marks:");
  marks.forEach(function (mark, index) {
    console.log("Student " + (index + 1) + ": " + mark);
  });

  let increasedMarks = marks.map(function (mark) {
    return mark + 5;
  });

  console.log("Marks after adding 5:", increasedMarks);

  let passedStudents = marks.filter(function (mark) {
    return mark > 40;
  });

  console.log("Passed Marks (>40):", passedStudents);

  let totalMarks = marks.reduce(function (total, mark) {
    return total + mark;
  }, 0);

  alert("Total Marks: " + totalMarks);
}
