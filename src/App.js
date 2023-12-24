import PT from "prop-types";
import { Component } from "react";


// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     // this.studentDetails = {
//     //   name:"Ajeet",
//     //   rollNo:"C4001",
//     //   emailId:"ajeet12@gmail.com"
//     // }

//     this.state = {
//         name:"Ankit",
//         rollNo:"C4001",
//         emailId:"ankit12@gmail.com"
//       }

//   }

//   // studentDetails = {
//   //   name:"Ajeet",
//   //   rollNo:"C4001",
//   //   emailId:"ajeet12@gmail.com"
//   // }

//   render()
//   {
//     return(<>
     
//      {/* <p>Name: {this.studentDetails.name}</p>
//      <p>Roll No: {this.studentDetails.rollNo}</p>
//      <p>Email ID: {this.studentDetails.emailId}</p> */}

//      <p>Name: {this.state.name}</p>
//      <p>Roll No: {this.state.rollNo}</p>
//      <p>Email ID: {this.state.emailId}</p>
    
//     </>)
//   }

// }





// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     // this.studentDetails = {
//     //   name:"Ajeet",
//     //   rollNo:"C4001",
//     //   emailId:"ajeet12@gmail.com"
//     // }

//     this.state = {
//         name:"Ajeet",
//         rollNo:"C4001",
//         emailId:"ajeet12@gmail.com",
//         address:{
//             city:"Noida",
//             country:"India"
//         }
//       }

//   }

//   // studentDetails = {
//   //   name:"Ajeet",
//   //   rollNo:"C4001",
//   //   emailId:"ajeet12@gmail.com"
//   // }

//   changeDate = ()=>{

//     // this.state.name="Aman"
//     // console.log(this.state);

//     this.setState({
//         name:"Chandan",
//         rollNo:"C8001",
//         emailId:"chandan12@gmail.com",
//         age:25
//       })
//   }

//   render()
//   {
//     console.log(this.state);
//     return(<>
     
//      <p>Name: {this.state.name}</p>
//      <p>Roll No: {this.state.rollNo}</p>
//      <p>Email ID: {this.state.emailId}</p>
//      <p>City: {this.state.address.city}</p>
//      <p>Country:{this.state.address.country}</p>
//      <br/>

//      <button type="button" onClick={this.changeDate}>Change</button>
    
//     </>)
//   }

// }





// export class AppIndex extends Component
// {
//   constructor() //Properties inside constructor
//   {
//     super();
//     this.state = {
//          counter:1
//       }
//   }

//   changeDate = ()=>{
//      this.setState({
//        counter:this.state.counter+1
//      });
//   }

//   // this.setState({   //<-----------------------Give error
//   //   counter:this.state.counter+1
//   // });

//   render()
//   {
//     return(<>
//      <p>Name: {this.state.counter}</p>

//      <button type="button" onClick={this.changeDate}>Change</button>    

//      {/* <button type="button" onClick={()=>this.setState({counter:this.state.counter+1})}>Change</button>  */}

//     </>)
//   }
// }


//Function inside this.setState()

// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     this.state = {
//          counter:1
//       }
//   }

//   changeDate = ()=>{
//     //  this.setState({
//     //    counter:this.state.counter+1
//     //  });

//     this.setState(
//         ()=>{
//             return {
//                 counter:this.state.counter+10
//             }
//         }
//     )
//   }

//   render()
//   {
//     return(<>
//      <p>Name: {this.state.counter}</p>
//      <button type="button" onClick={this.changeDate}>Change</button>
//     </>)
//   }
// }





// setState also takes one function with 2 parameters
// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     this.state = {
//          counter:1
//       }

//   }

//   changeDate = ()=>
//   {

//     //  this.setState({
//     //    counter:this.state.counter+1
//     //  });

//     //     this.setState((state,props)=>{
//     //             return {
//     //                 counter:state.counter+10
//     //             }
//     //         }
//     //     )
//     //   }

//     //without return statement syntax

//     //this.setState((state,props)=>({counter:state.counter+10}))

//     //this.setState((state)=>({counter:state.counter+10}))


//     //when single parameter in arrow function no need of ()
//     this.setState(state=>({counter:state.counter+10}))
//   }

//   render()
//   {
//     return(<>
//      <p>Name: {this.state.counter}</p>
//      <button type="button" onClick={this.changeDate}>Change</button>
//     </>)
//   }
// }





//setState is asynchronous.

// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     this.state = {
//          counter:1
//       }

//   }

//   changeDate = ()=>{

//     // this.setState({counter:this.state.counter+1});
//     // this.setState({counter:this.state.counter+1});
//     // this.setState({counter:this.state.counter+1});
//     // this.setState({counter:this.state.counter+1});
//     // this.setState({counter:this.state.counter+1});

//     // Output = 2 not 5

//     // In below code in this.setState will have previous state.

//     // below is the best way of writing code for state. and function
//     this.setState((state,props)=>({counter:state.counter+1}))
//     this.setState((state,props)=>({counter:state.counter+1}))
//     this.setState((state,props)=>({counter:state.counter+1}))
//     this.setState((state,props)=>({counter:state.counter+1}))
//     this.setState((state,props)=>({counter:state.counter+1}))

//     //Output = 6


//  }

//   render()
//   {
   
//     return(<>
     
//      <p>Name: {this.state.counter}</p>

//      <button type="button" onClick={this.changeDate}>Change</button>


//     </>)
//   }

// }




// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     this.state = {
//          counter:1
//       }

//   }

//   changeDate = ()=>{

//     this.setState((state,props)=>({counter:state.counter+1}))
//     console.log(this.state); //here, in console we have one value back
//  }

//   render()
//   {
   
//     return(<>
     
//      <p>Name: {this.state.counter}</p>

//      <button type="button" onClick={this.changeDate}>Change</button>


//     </>)
//   }
// }



/*

Certainly! In JavaScript, a callback function is a powerful concept that allows one function to call another function after 
it has completed its task. Let’s dive into the details:

What is a Callback Function?

A callback function is a function that is passed as an argument to another function.
It is usually used for handling asynchronous events, such as network requests or file I/O.
When the first function finishes its task, it invokes the callback function.

*/

// export class AppIndex extends Component
// {

//   constructor() //Properties inside constructor
//   {
//     super();
//     this.state = {
//          counter:1
//       }

//   }

//   changeDate = ()=>{

//     // this.setState((state,props)=>({counter:state.counter+1}))
//     // console.log(this.state); //here, in console we have one value back
     
//     //call back in setState
//    // this.setState((state,props)=>({counter:state.counter+1}),()=>console.log(this.state))

//    this.setState((state,props)=>({counter:state.counter+1}),this.getLatestState)

   
// }

// getLatestState = ()=>{
//     console.log(this.state);
// }


//   render()
//   {
   
//     return(<>
     
//      <p>Name: {this.state.counter}</p>

//      <button type="button" onClick={this.changeDate}>Change</button>


//     </>)
//   }

// }




export class AppIndex extends Component
{

  constructor() //Properties inside constructor
  {
    super();
    this.state = {
         counter:1
      }
     // setState() cannot be called in constructor.
  }

  changeDate = ()=>{
     this.setState((state,props)=>({counter:state.counter+1}))
    }


  render()
  {
   
    return(<>
     <p>Name: {this.state.counter}</p>
     <button type="button" onClick={this.changeDate}>Change</button>
    </>)
  }

}



