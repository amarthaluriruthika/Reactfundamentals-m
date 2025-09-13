
// import "./Productcard.css"
function Productcard(product) {
      const titleStyle={
            fontSize:"30px",
            fontWeight:"bold" ,
            color: "blue"
    }
    const priceStyle={
        fontSize:"20px",
        fontWeight:"larger",
        color:"maroon"
    }
    const containerStyle={
        margin: "13px",
    borderRadius: "20px",
    borderColor:  "grey",
    borderStyle: "solid",
    textAlign: "left"
    }
        

    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Name:{product.name}</p>
            <p style={priceStyle}>price={product.price}</p>
            <p>
                {product.available === true ? <p className="stock">In stock</p>
                    : <p className="outstock">Out of stock</p>}  </p>



        </div>

    )
}
export default Productcard