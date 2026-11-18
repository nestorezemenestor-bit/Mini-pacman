 const students = [
        {
            name: "John",
            age: 20,
            course: "Biomedical engineering",
            score: 89
        },
        {
            name: "Joshua",
            age: 33,
            course: "Mechatronics engineering",
            score: 50
        },
        {
            name: "Chinaza",
            age: 24,
            course: "Political science",
            score: 83
        }
    ];

    //Arrow function to determine grade 
     const getGrade = (score) => {
        if (score >= 70) {
         return "Excellent";
        } else if (score <= 50) {
         return "Pass";
        } else {
         return "Fail";
      }
         };

    //Loop through students and display their details
    students.forEach(student=> {
        console.log(`
        Name: ${student.name}
        Age: ${student.age}
        Course: ${student.course}
        Grade: ${getGrade(student.score)}
            `);
      });
    