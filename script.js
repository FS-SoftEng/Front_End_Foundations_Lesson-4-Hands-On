class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
      getName(){
        console.log(this.name.toUpperCase());
      }
      getSalary() {
        console.log(this.salary);
      }
      getHireDate() {
        console.log(this.hireDate);
      } 
}

class Manager extends Employee {
    constructor(name, salary, hireDate, jobDescription){
    super(name, salary, hireDate);
    this.jobDescription = jobDescription;
    }
    getjobDescription() {
    console.log("Manager: " + this.name + " makes " + this.salary + " and was hired on " + this.hireDate + " " + "as a " + this.jobDescription)
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience){
    super(name, salary, hireDate)
    this.experience= experience 
    }
    getExperience() {
    console.log("Designer: " + this.name + " makes " + this.salary + " and was hired on " + this.hireDate + " with " + this.experience)
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degree){
    super(name, salary, hireDate) 
    this.degree= degree
    }
    getDegree() {
    console.log("Sales Associate: " + this.name + " makes " + this.salary + " and was hired on " + this.hireDate + " while holding a " + this.degree)
    }
}

let manager= new Manager("John", "$80,000", "01/01/2001", "Sales Manager");
let designer= new Designer("Peter", "$75,000", "02/02/2002", "10 years of experience");
let salesassociate= new SalesAssociate("James", "$60,000", "03/03/2003", "Master's degree");
manager.getjobDescription();
designer.getExperience();
salesassociate.getDegree(); 