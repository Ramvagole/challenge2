function employeeInformation(employees){
    let [a,b,c]=employees;
    let {name,department}=b;
    let secondEmployeesName=name;
    let secondEmployeesDepartment=department;
    console.log({secondEmployeesName,secondEmployeesDepartment})
}
function averageSalary(employees){
    let totalSalary=0;
    employees.forEach((v)=>{
        totalSalary=totalSalary+v.salary;
    })
    let averageSalary=((totalSalary)/(employees.length));
    console.log(averageSalary);
}
function thirdEmployeeInfo(employees){
    let [a,b,c]=employees;
    let {name,age,salary}=c
    console.log(`Employee:${name},Age:${age},salary:${salary},Bonus:${(salary*10)/(100)}`);
}
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
employeeInformation(employees);
averageSalary(employees);
thirdEmployeeInfo(employees);