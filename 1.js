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

console.log(student);