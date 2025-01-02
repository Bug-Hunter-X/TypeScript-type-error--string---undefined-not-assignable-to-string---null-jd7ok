function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Correct behavior
printName('John'); // Correct behavior

const myName: string | null = null;
printName(myName); // Correct behavior

const anotherName: string | undefined = undefined; 
printName(anotherName); // Error: Argument of type 'string | undefined' is not assignable to parameter of type 'string | null'.