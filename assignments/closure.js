// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function robot_call(){
  let voice = 'BEEP';
  function robotAnswer(){
    console.log(`one robot calls and says ${voice} the other answers and says BOOP`);
  };
  robotAnswer();
}
robot_call();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count=0;
  function up(){
    ++count;
    console.log(count);
  }
  return up;
  // Return a function that when invoked increments and returns a counter variable.
};

 const newCounter = counter();
 

 newCounter();
 newCounter();


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    let myobj={
    count:0,
    inc:function(){
      this.count++;
      console.log(this.count);},
    
    dec:function(){
      this.count--;
      console.log(this.count);}
    }
    return myobj;
    
  };
    
const newfact =  counterFactory();
newfact.inc();
newfact.inc();
newfact.dec();
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

