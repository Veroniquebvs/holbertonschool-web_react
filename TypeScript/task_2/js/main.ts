//TASK 5----------------------------------//
interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return ("Working from home");
    }
    getCoffeeBreak(): string {
        return ("Getting a coffee break");
    } 
    workDirectorTasks(): string {
        return ("Getting to director tasks");
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return ("Cannot work from home");
    }
    getCoffeeBreak(): string {
        return ("Cannot have a break");
    }
    workTeacherTasks(): string {
        return ("Getting to work");
    }
}

function createEmployee(salary: string | number):  DirectorInterface |TeacherInterface {
    if (typeof salary === 'number' && salary < 500) {
        return (new Teacher());
    } 
    return (new Director()); 
}

console.log("TASK5");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

//TASK 6----------------------------------//
function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
        (console.log(employee.workDirectorTasks()));
    } else {
        (console.log(employee.workTeacherTasks()));
    }    
}

console.log("TASK6");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

//TASK 7----------------------------------//
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass == 'Math') {
        return ("Teaching Math");
    } else {
        return ("Teaching History");
    }
}

console.log("TASK7");
console.log(teachClass('Math'));
console.log(teachClass('History'));