var person = {
  firstName: 'Alvaro',
  lastName: 'Diaz',
  hobby: 'Gaming'
}
console.log(person);

var fullName = person.firstName + " " + person.lastName;
console.log('The persons name is', fullName);

person.job = 'coding';
console.log('The persons current job is:', person.job);

person.previousJob = 'awning assembler';
console.log('The persons previous job is:', person.previousJob);
