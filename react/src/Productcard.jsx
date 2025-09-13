function Productcard({productName,price,isAvailable}){
    // const productName="Watch"
    // const price=399
    // const isAvailable=true
    return(
        <div>
            <p>Product name:{productName}</p>
            <p>Price:{price}</p>
            <p>{isAvailable===true?"In stock":"Out of stock"}</p>
        </div>
        
    )
}
 export default Productcard