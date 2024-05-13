let student = {
    name: "nisha",
    surname: "pipaliya",
    grid: 4415,
    number: 9999999999,

    add: {
        name: "nisha",
        city: "surat",
        state: "gujrat",
        country: "india",
    },
    skills: ["html", "css", "javascript", "react", "mongodb"],

    friends: [{ name: "nisha", grid: "4416", course: "full-stack"},
            { name: "nisha", grid: "4416", course: "full-stack" }],

    course:{
        name:"full stack",
        fees:135000,
        duration:"twelwemonth",


    }

}

console.log(student.number);
console.log(student.add.state);
console.log(student.skills[2]);
console.log(student.friends[1].course);
console.log(student.course);