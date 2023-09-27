// The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.
// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

// Solution:
// The above code never terminates, because the condition of the for loop was left empty. In this case, JavaScript treats it as true.

for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}
