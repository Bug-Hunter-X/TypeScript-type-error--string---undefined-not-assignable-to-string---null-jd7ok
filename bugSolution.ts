function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

// Solution 1: Type assertion
function printNameSolution1(name: string | null | undefined): void {
  const nameString = name as string | null; // assert name is string or null
  printName(nameString);
}

// Solution 2: Function overloading
function printNameSolution2(name: string | null): void; 
function printNameSolution2(name: string | undefined): void; 
function printNameSolution2(name: string | null | undefined): void {
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
printNameSolution1(anotherName); // Correct behavior using type assertion
printNameSolution2(anotherName); // Correct behavior using function overloading