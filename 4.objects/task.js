function Student(name, gender, age) {
    let marks;
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
    if(this.marks === undefined) {
    this.marks = [];
    mark.forEach( item => this.marks.push(item));
  } else {
    mark.forEach( item => this.marks.push(item));
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(item => sum += item);


  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;

}


// ваш код для остальных методов
let student1 = new Student('Buzz', 'male', 35);
