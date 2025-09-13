// import "./App.css"
// import Idcard from "./Idcard.jsx"
// import BlogPost from "./BlogPost.jsx"
// import Productcard from "./Productcard.jsx"
// import Profile from "./Profile.jsx"
import {useState} from "react"
function App() {
  // const person = {
  //   name: "A.Ruthika",
  //   course: "B.Tech",
  //   rollNo: "24VV1A0504",
  //   bloodGroup: "o+ve",
  //   dob: "18/05/05"
  // }
  // return (
  //   <div>

  //     <Idcard name={person.name} course={person.course} rollNo={person.rollNo} bloodGroup={person.bloodGroup} dob={person.dob} />


  //   </div>
  // )}

  // const products = [{
  //   productName: "Product 1",
  //   price: 3000,
  //   isAvailable: true
  // }, {
  //   productName: "Product 2",
  //   price: 1300,
  //   isAvailable: true

  // },
  // {
  //   productName: "Product 3",
  //   price: 3870,
  //   isAvailable: true
  // }]
//   const posts=[{
//     id:1,
//     author:"Ravi Chandra",
//     title:"the boy",
//     description:"a great times"
//   },
// {
//   id:2,
//   author:"Gaurav",
//     title:"the sands of time",
//     description:"once upon a time"

// },
// {
//   id:3,
//   author:"Neetu Priya",
//     title:"vatican city",
//     description:"the never ending mystery"
// }]
const [count,setCount]=useState(0)
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [formData,setformData]=useState({
  email:"",
  password:""
})
const handleClick=(name)=>{
  
  alert("Hello"+name )
}
const handleChange=(event)=>{
  // console.log(event.target.name)
  //  console.log(event.target.value)
  setformData({
    ...formData,
    [event.target.name]:event.target.value
    
  })
}
const handleSubmit=(event)=>{
  event.preventDefault();
  alert(`Email:${formData.email}\n Password:${formData.password}\nYou are logged in`)
}


const handleEmail=(event)=>{
  setEmail(event.target.value)
}

const handlePassword=(event)=>{
    setPassword(event.target.value)
}

const handleIncrement=()=>{
  
  setCount((prevCount)=>prevCount+1)
console.log(count)
}
  return (
    <div >
      {/* <Productcard name={product.name} price={product.price} available={product.isAvailable} />
      {/* <Productcard name={product.name} price={product.price} available={product.isAvailable == false} /> */}


      {/* <div className="">
 <Idcard name={person.name} course={person.course} rollNo={person.rollNo} bloodGroup={person.bloodGroup} dob={person.dob}/> */}
      {/* {
        products.map((product) => (
          < Productcard
            name={product.productName}
            price={product.price}
            isAvailable={product.isAvailable}
          />))
      } */} 
      {/* {
        posts.map((post)=>(
          <BlogPost
          key={post.id}
          author={post.author}
          title={post.title}
          description={post.description}
          />
 
        ))
      } */}
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email"placeholder="Enter your email" onChange={handleChange} />
      <input type="password" name="password"placeholder="Enter your password" onChange={handleChange} />
      <button type="Submit">Login</button>
      </form>
      {/* <p>I am a button</p> */}
      
      {/* <button onClick={()=>handleClick("Ruthika")}>Login</button> */}


    </div>)
}


export default App

