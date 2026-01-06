// VARIABLES: It is a storage box to store the data. Storage box's name is variable's name.

// Declaration
var a;
let b;
// But we can't only declare const, we have to assign the value(initialize) while declaring it.

// Declaration + Initialization
var a1 = 10;
let b1 = 20;
const pi = 3.14;
// Here is a catch, we can't reclare let and const.
// We can't update values of const.

// Demerits of var:
// 1. It add in window.
// 2. It is Function scoped.  -> Doesn't obey scope.
// 3. Redeclaration is possible.

// Scope: A range of an variable where we can use it.
// Types of scope:

// 1. Function scoped: Accessable inside the function.
function one() {
  var a = 10;
  if (true) {
    var b = 20;
    console.log(a);
    console.log(b);
  }
  console.log(b); // Accessing b, but b is inside a block scoped, It is possible because var is function scoped so the variables are accessible in entire function.
}
one();

// 2. Block scoped
function two() {
  let a = 10;
  if (true) {
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  console.log(a);
  // console.log(b); // cannot access -> Due to block scoped
  // console.log(c); // cannot access -> Due to block scoped
}
two();

// 3. Global scoped
let globalVariable = "Data"; // Accessible ins whole code.
function three() {
  let a = 10;
  console.log(a);
  console.log(globalVariable);
  if (true) {
    let b = 20;
    console.log(b);
    console.log(globalVariable);
  }
}
three();
console.log(globalVariable);
