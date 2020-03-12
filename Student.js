class Student {
    constructor(Name,Matric_No,major) {
    this.Name = Name,
    this.Matric_No = Matric_No,
    this.major = major;
}

    get NameofStudent(){
      return this.Name;
    }
    set  NameofStudent(Name){
      this.Name=Name;
    }
    get MatricNo(){
      return this.Matric_No;
    }
    set  MatricNo(Matric_NO){
      this.Matric_NO=Matric_NO;
    }
    get Major(){
      return this.major;
    }
    set  Major(major){
      this.major=major;
    }
            
    
    
    display=()=> {
       
         console.log(`Name: ${this.Name}`);
         console.log(`Matric_NO: ${this.Matric_No}`);
         console.log(` major: ${this.major}`);
      
      } 
     }
    
     module.exports = Student;