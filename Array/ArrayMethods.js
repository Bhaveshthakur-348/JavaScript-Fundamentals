// /////////////////// Blog No 1 ////////////////////////////////////
// ///////// Splice ///////////////////////////////////////////////

// array.splice(index, howmany, item1, ....., itemN);

// Put jatin at the end
// let names = ["Bhavesh", "Nick", "john"];
// names.splice(names.length, 0, "Jatin");
// [ 'Bhavesh', 'Nick', 'john', 'Jatin' ]

// // delete nick and put NICK
// let names = ["bhavesh", "nick", "john"];
// names.splice(1, 1, "NICK");
// // [ 'bhavesh', 'NICK', 'john' ]

// // remove 2 index ele only
// let names = ["bhavesh", "nick", "john", "jonny"];
// names.splice(2, 1);
// // [ 'bhavesh', 'nick', 'jonny' ]

// // remove john and put jack and peter
// let names = ["bhavesh", "nick", "john", "jonny"];
// names.splice(2, 1, "jack", "peter");
// // [ 'bhavesh', 'nick', 'jack', 'peter', 'jonny' ]

// // index 2 - end remove all
// let names = ["bhavesh", "nick", "john", "jonny"];
// names.splice(2, 2);
// // [ 'bhavesh', 'nick' ]

// // add css in index 1
// let courses = ["html", "js"];
// courses.splice(1, 0, "css");
// // [ 'html', 'css', 'js' ]