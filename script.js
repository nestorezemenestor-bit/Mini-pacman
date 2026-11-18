const students = [
    {
        name: "John",
        age: 20,
        course: "Computer Science",
        score: 85
    },
    {
        name: "Mary",
        age: 19,
        course: "Information Technology",
        score: 91
    },
    {
        name: "James",
        age: 17,
        course: "Mechanical Engineering",
        score: 66
    }
    ];

    //Arrow function to determine grade
    const getGrade = (score) => {
   if (score >= 70) {
   return "Excellent";
   } else if (score >= 50) {
     return "Pass";
   } else {
    return "Fail";
  } 
    };

    //Loop through students and display their details
    students.forEach(student =>  {
    console.log(` 
      Name: ${student.name}
      Age: ${student.age}
      Course: ${student.course}
      Grade: ${getGrade(student.score)}
      
     `);
    });


