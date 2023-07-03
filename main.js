const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]
   
 // function tính thứ hạng trung bình của cả lớp
function averageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
    sum += grades[i].grade;
    }
    return sum / grades.length;
}
console.log(averageGrade(grades));

// function tính thứ hạng trung bình của nam trong lớp
function averageMaleGrade(grades) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'M') {
    sum += grades[i].grade;
    count++;
    }
    }
    return sum / count;
}
console.log(averageMaleGrade(grades));

// Viết function tính thứ hạng trung bình của Nữ trong lớp
function averageFemaleGrade(grades) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'F') {
    sum += grades[i].grade;
    count++;
    }
    }
    return sum / count;
}
console.log(averageFemaleGrade(grades));

//Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function highestMaleGrade(grades) {
    let highest = null;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'M' && (highest === null || grades[i].grade > highest.grade)) {
    highest = grades[i];
    }
    }
    return highest;
}
console.log(highestMaleGrade(grades));

// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function highestFemaleGrade(grades) {
    let highest = null;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'F' && (highest === null || grades[i].grade > highest.grade)) {
    highest = grades[i];
    }
    }
    return highest;
}
console.log(highestFemaleGrade(grades));

 // Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function lowestMaleGrade(grades) {
    let lowest = null;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'M' && (lowest === null || grades[i].grade < lowest.grade)) {
    lowest = grades[i];
    }
    }
    return lowest;
}
console.log(lowestMaleGrade(grades));

  // Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function lowestFemaleGrade(grades) {
    let lowest = null;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'F' && (lowest === null || grades[i].grade < lowest.grade)) {
    lowest = grades[i];
    }
    }
    return lowest;
}
console.log(lowestFemaleGrade(grades));

  // Viết function thứ hạng cao nhất của cả lớp
function highestGrade(grades) {
    let highest = null;
    for (let i = 0; i < grades.length; i++) {
    if (highest === null || grades[i].grade > highest.grade) {
    highest = grades[i];
    }
    }
    return highest.grade;
}
console.log(highestGrade(grades));

//   Viết function thứ hạng thấp nhất của cả lớp
function lowestGrade(grades) {
    let lowest = null;
    for (let i = 0; i < grades.length; i++) {
    if (lowest === null || grades[i].grade < lowest.grade) {
    lowest = grades[i];
    }
    }
    return lowest.grade;
}
console.log(lowestGrade(grades));

 //  Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
 function getAllFemaleStudents(grades) {
    let females = [];
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'F') {
    females.push(grades[i]);
    }
    }
    return females;
}
console.log(getAllFemaleStudents(grades));

  // Function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortByName(grades) {
    return grades.sort((a, b) => a.name.localeCompare(b.name));
}
console.log(sortByName(grades));

 // Function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortByGrade(grades) {
    return grades.sort((a, b) => b.grade - a.grade);
}
console.log(sortByGrade(grades));

 // Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function getFemaleStudentsWithJ(grades) {
    let students = [];
    for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === 'F' && grades[i].name.startsWith('J')) {
    students.push(grades[i]);
       }
    }
    return students;
 }
 console.log(getFemaleStudentsWithJ(grades));

 // Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function getTopStudents(grades) {
    let sortedGrades = sortByGrade(grades);
    return sortedGrades.slice(0, 5);
}
console.log(getTopStudents(grades));