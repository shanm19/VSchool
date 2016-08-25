var employees = [];

function Employee(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    
    this.printEmployeeForm = function(){
        console.log("Name: " + this.name);
        console.log("Job Title: " + this.jobTitle);
        console.log("Salary: $" + this.salary + "/hour");
        console.log("Status: " + this.status);
        console.log("");
    }
    
    this.add = function(){
        employees.push(this);
    }
    
}

var rebecca = new Employee("Rebecca Hall", "Actress", 40);
var ryan = new Employee("Ryan Tedder", "Singer", 70);
var john = new Employee("John Krasinski", "Actor", 50);

john.status = "Contract";

rebecca.printEmployeeForm();
ryan.printEmployeeForm();
john.printEmployeeForm();

rebecca.add();
ryan.add();
john.add();

console.log(employees);

