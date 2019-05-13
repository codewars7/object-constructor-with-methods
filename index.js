const Person = function(firstAndLast) {
  let fullName = firstAndLast.split(' ')
  this.getFullName = function() {
    return fullName[0] + ' ' + fullName[1];
  };
  this.getFirstName = () => fullName[0];
  this.getLastName = () => fullName[1];
  this.setFirstName = (first) => fullName[0] = first;
  this.setLastName = (last) => fullName[1] = last;
  this.setFullName = (firstAndLast) => {
    const full = firstAndLast.split(" ")
    const name = full[0];
    const surName = full[1];
    fullName[0] = name
    fullName[1] = surName
  }
  return firstAndLast;
};
const bob = new Person('Bob Ross');
console.log(bob.getFullName())
// reset a name
bob.setFullName('Robert Wandburke')
console.log(bob.getFullName())
