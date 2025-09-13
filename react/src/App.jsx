// import "./App.css"
// import Idcard from "./Idcard.jsx"
import Productcard from "./Productcard.jsx"
// import Profile from "./Profile.jsx"
function App() {
  // c
  const product={
    name:"watch",
    price:499,
    isAvailable:true
  }

  return (
    <div >
      <Productcard name={product.name} price={product.price} available={product.isAvailable} />
      <Productcard name={product.name} price={product.price} available={product.isAvailable == false} />


      {/* <div className="">
   <Idcard name={person.name} course={person.course} rollNo={person.rollNo} bloodGroup={person.bloodGroup} dob={person.dob}/> */}

    </div>
   

  )
}

export default App
