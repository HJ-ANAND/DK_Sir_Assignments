function runStudentProcessor() {

    let students = [
        {name: "rahul", marks: 85},
        {name: "amit", marks: 42},
        {name: "sara", marks: 73}
    ];

    let upperNames = students.map(student => {
        return {...student, name: student.name.toUpperCase()};
    });

    let passedStudents = students.filter(student => student.marks > 50);

    let totalMarks = students.reduce((total, student) => total + student.marks, 0);
    let averageMarks = totalMarks / students.length;

    let studentList = "";
    students.forEach(student => {
        studentList += student.name + " - " + student.marks + "\n";
    });

    alert(
        "Students:\n" + studentList +
        "\nUppercase Names:\n" + upperNames.map(s => s.name).join(", ") +
        "\n\nPassed Students (>50):\n" + passedStudents.map(s => s.name).join(", ") +
        "\n\nAverage Marks: " + averageMarks
    );

    console.log("Students:", students);
    console.log("Uppercase Names:", upperNames);
    console.log("Passed Students:", passedStudents);
    console.log("Average Marks:", averageMarks);
}