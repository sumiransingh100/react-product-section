import Product from './Product'

function ProductTab() {
    let styles ={
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexWrap : "wrap"
    }
  return (
    <div style={styles}>
      <Product Title={"Mobile"} idx={0} />
      <Product Title={"Laptop"} idx={1}/>
      <Product Title={"Washing Machine"} idx={2}/>
      <Product Title={"Plan"} idx={3}/>
    </div>
  )
}

export default ProductTab;