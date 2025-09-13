import Productcard from "./Productcard.jsx"
// import Profile from "./Profile.jsx"
function App() {
  const productName = "watch"
  const price = 399
  const isAvailable = true
  return (
    <div>
      <Productcard productName={productName} price={price} isAvailable={isAvailable} />
    </div>

  )
}

export default App
