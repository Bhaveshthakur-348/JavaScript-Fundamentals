/* variable scope */
// var are function scope and let and const are block scope

// {
//     var a = 10;
//     const b = 20;
//     let c = 30;
// }
// console.log(a, b, c)

// function display(){
//     var a = 20;

//     if(true){
//         let a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// display()

/**********************************************************************/

/* variable shadowing */
// we can redeclare var with let but let with var not
// function display(){
//     var a = 20;

//     if(true){
//         let a = 30;
//         console.log(a);
//     }
// }
// display()

/**********************************************************************/

/* illegel shadowing */
// function display(){
//     let a = 20;

//     if(true){
//         var a = 30;
//         console.log(a);
//     }
// }
// display()

/**********************************************************************/

/* declaration */
// var a = 10;
// var a = 20;

// let a = 10;
// let a = 20;

// var a = 10;
// let a = 20;

// const a = 10;
// const a = 20;
// console.log(a);

/**********************************************************************/

/* Re-Initialization */
// let a = 10;
// a =20;
// console.log(a)

// const b = 20;
// b = 30;
// console.log(b) //Assignment to constant variable.

/**********************************************************************/

/* declaration without initialization */
// var and let can be initialize without declaration
// let a;
// var b;
// console.log(a, b)

// const c;
// console.log(c) // Missing initializer in const declaration

/**********************************************************************/

/* initialization */
// const c =10;

/**********************************************************************/
