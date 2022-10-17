import React from "react";
//import the Functional.css
import '../Styles/Functional.css';
//we can create many components
//we can export only one component

//Functional component -> return( embed HTML )
//export default function FunctionalComponent()
//Components - must start with an Uppercase
function FunctionalComponent()
{
 return(
    <div>
    <h4>

    React Training
    <br></br>
    <br></br>
    <FunctionalComponent1></FunctionalComponent1></h4>
   
    
    </div>
 )
}
function FunctionalComponent1()
{
 return(
    <h5>There are two types of components in React. They are Functional and Class Component 
         <br></br>
    <br></br>
        <FunctionalComponent2></FunctionalComponent2></h5>
 )
}
//arrow function
const FunctionalComponent2=()=>{
    return(
        <div>
        <h4>Functional Component</h4>
      
        <h6>
            A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).\
            
            <br></br>
    <br></br>
            <FunctionalComponent3></FunctionalComponent3></h6>
          
 
            </div>
    )
}
//arrow function
const FunctionalComponent3=()=>{
    return(
        <div>
     
     <h4>Class Component</h4>
     <p>A class component requires you to extend from React. Component and create a render function which returns a React element.</p>
      <br>
      </br>
      <br>

      </br>
      <h4>React Fragemnts</h4>
        <FunctionalComponent4></FunctionalComponent4>
        </div>
    )
}

//arrow function 
//React Fragments
const FunctionalComponent4=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr>
                    <FunctionalComponent5></FunctionalComponent5>
                  
                </tr>
            </thead>
        </table>
    )
}
//React Fragemnts - <> </> or <React.Fragment>
//React Fragemnts - Which are used for displaying the set of child elements without a parent element
//To avoid unnecceary elements to be rendered
const FunctionalComponent5=()=>{
    return(
        <React.Fragment>
       <tr>
        <th>Employee Id</th>
        <th>Emp Name</th>
        <th>Emp Designation</th>
        </tr>
        <tr>
        <td>13118</td>
        <td>Bhavana</td>
        <td>Trainee</td>
        </tr>
        <tr>
            <td>13119</td>
            <td>Sahana</td>
            <td>IT</td>
        </tr>
        </React.Fragment>
    )
}

//only one export
export default FunctionalComponent;
