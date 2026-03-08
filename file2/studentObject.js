function runStudentObject() {

    let student = {
        name: "Anand",
        marks: 85,

        displayInfo: function() {
            return "My name is " + this.name + " and my marks are " + this.marks;
        }
    };

    let result = student.displayInfo();

    alert(result);

    console.log(result);
}