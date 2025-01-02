# TypeScript Type Error: string | undefined not assignable to string | null

This repository demonstrates a common TypeScript type error that occurs when using optional parameters with different null/undefined combinations.  The provided code shows a simple function that handles null values correctly, but throws a type error when undefined is passed as an argument, even though both are considered falsy in JavaScript.

The issue stems from TypeScript's strict type checking and the difference between `null` and `undefined` types.  While both can represent the absence of a value, they are distinct types in TypeScript.

The solution illustrates a way to resolve this error using type assertion or function overloading.