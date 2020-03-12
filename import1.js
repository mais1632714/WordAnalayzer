const Myimport = require('./Student.js');

const readline = require('readline');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    
 });

rl.question('Please enter your Name',(Name) => {
    rl.question('Please enter your Matric no', (Matric_No) => {
        rl.question('Please enter your major', (major) => {
            let student1 = new Myimport(Name,Matric_No,major);
        student1.display();
        rl.close();
    });
    

        });
    
});