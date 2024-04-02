/* Event Bubbling: 
Event bubbling is a mechanism in JavaScript where an event occurring on a nested element will bubble up 
through its ancestors in the DOM hierarchy until it reaches the root element 
*/
// document.querySelector('#grandParent').addEventListener("click", () => {
//     console.log("grandParent click");
// })

// document.querySelector('#parent').addEventListener("click", () => {
//     console.log("parent click");
// })

// document.querySelector('#child').addEventListener("click", () => {
//     console.log("child click");
// })


/* Event Capturing: 
Event capturing is the phase in the event propagation process where the browser starts from the top 
of the DOM tree (the root) and goes down to the target element where the event originated. 
*/
// document.querySelector('#grandParent').addEventListener("click", () => {
//     console.log("grandParent click");
// }, true)

// document.querySelector('#parent').addEventListener("click", () => {
//     console.log("parent click");
// }, true)

// document.querySelector('#child').addEventListener("click", () => {
//     console.log("child click");
// },true)


/* Event Delegation:
Event delegation in JavaScript is a pattern that efficiently handles events. 
Events can be added to a parent element instead of adding to every single element.
Advantages: Performance, Memory Efficiency, Simplicity and Maintainability
*/

document.querySelector("#grandParent").addEventListener("click", (e) => {
  if (e.target.id === "child") {
    console.log("child click");
  } else if (e.target.id === "parent") {
    console.log("parent click");
  } else {
    console.log("grandParent click");
  }
});
