// task 1 -----------------------------------//
interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [propName: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log("TASK1");
console.log(teacher3);

// task 2 -----------------------------------//
interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("TASK2");
console.log(director1);

// task 3 -----------------------------------//
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const teacher = printTeacher("john", "doe");
console.log("TASK3");
console.log(teacher);

// task 4 -----------------------------------//
class StudentClass {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework(): string {
       return ("Currently working");
    }

    displayName(): string {
       return (`${this.firstName}`);
    }
}

interface StudentInterface {
    firstName: string
    lastName: string
    workOnHomework(): string
    displayName(): string
}

interface ConstructorStudent {
    new (firstName: string, lastName: string): StudentInterface;
}

console.log("TASK4");
// Création d'une instance de l'étudiant
const student = new StudentClass("Alice", "Dupuis");

// Test de la méthode displayName
console.log(student.displayName());

// Test de la méthode workOnHomework
console.log(student.workOnHomework());