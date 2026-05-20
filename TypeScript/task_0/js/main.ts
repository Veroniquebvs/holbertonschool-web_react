interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

let student1: Student = {firstName: "nicolas", lastName: "dupuis", age: 25, location: "toulouse"};
let student2: Student = {firstName: "alice", lastName: "dubois", age: 30, location: "blagnac"};
let studentsList: Student[] = [student1, student2];

const tableHtml: HTMLTableElement = document.createElement('table');

for (const student of studentsList) {
    const row: HTMLTableRowElement = document.createElement("tr");

    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableHtml.appendChild(row);
}

if (document.body) {
    document.body.appendChild(tableHtml);
}
