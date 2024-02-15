/* call, bind , apply */
// It is Use for change the object refrence 

// const firstObj = {
//   name: "MSD",
//   age: 42,
//   car: "ferrari",

//   dataFunction: function(a, b){
//     console.log(a, b, this);
//   }
// }

// const secondObj = {
//   name: "Pant",
//   age: 26,
//   car: "Mercedes",

//   dataFunction: function(a, b){
//     console.log(a, b, this);
//   }
// }

// firstObj.dataFunction.call(secondObj, 1, 3)
// firstObj.dataFunction.apply(secondObj, [1, 3])
// const newObj = firstObj.dataFunction.bind(secondObj, 1, 3)
// newObj()



// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.call(employee1, "Hello", "for good luck");
// invite.apply(employee1, ["Bhai", "Jay shree ram"]);
// let Bind = invite.bind(employee2, "hello", "byy");
// Bind();
