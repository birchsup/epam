/**
 * JS Classes:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * - https://javascript.info/class
 * - https://javascript.info/class-inheritance
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here
class Person {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

/**
 * implement class Student that extends Person with:
@@ -17,9 +27,22 @@
 * 3) method getGrade that returns property grade
 */
//put your code here
class Student extends Person {
  constructor({ grade, ...rest }) {
    super({ ...rest });

    this.grade = grade;
  }

  getGrade() {
    return `${this.grade}`;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person({ firstName: 'dims', lastName: 'sad' }); //create instance of class person
const student = new Student({ firstName: 'dims', lastName: 'sad', grade: '5' }); //create instance of class student

module.exports = {
  person,
  student,
};
