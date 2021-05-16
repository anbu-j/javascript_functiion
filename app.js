// functions are bits of reusable code
// we can use the same function and just pass in new information
// functions have parameters and arguments
// write once use multiple times

//ES5 Function
// this is a function declaration
//function add(){
 //   console.log(5+5)
//}
// this is a function call
//add()

//ES6 Function
//var add = () =>{
   // console.log(5+5)

//}
//add()
//var x;
//var y;
//var add = (dog,cat) => {
  //  let x;
  //  let y;
   // console.log(x+y)
//}
//add(10,15)
//add(100,300)
// write a function that accepts 5 numbers and make the call
//var add = (a,b,c,d,e) => {
  //  console.log(a+b+c+d+e)
//}
//add(2,3,4,1,5)
// write a club function
// if user is 18+ can get in
// if user is 21+ they can get in and drink
//if user is over 18 and younger than 21 they an get in but not drink
// use parameters and arguments
var danceclub = (age) => {
    if(age >= 21){
        console.log("You can enter and enjoy the drink")
         
}
else if (age >=18 && age <21){
    console.log("You can enter but no drinks")


}
else if (age <18 ){
    console.log("You cannot enter")

}
}
danceclub(14)
danceclub(42)
danceclub(18)





