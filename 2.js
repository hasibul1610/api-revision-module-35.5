const student = {
    name: 'Shanto',
    age: 23,
    major: 'CSE',
    subjects : ['math','english','programming'],
    bestFriend : {
        name: 'jim',
        age: 25,
        major: 'cse'
    },
    takeExam: function(){
        console.log(this.name, "Taking Exam of Students");
    },
}

const templeteString = `My name is ${student.name}. My Seccond subject from subject array is ${student.subjects[1]}, and my bestfriend name is ${student.bestFriend.name}`;

console.log(templeteString);