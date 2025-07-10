import Price from "./Price"
import "./Product.css"

function Product({Title, idx , Description}){
    let oldPrice = ["2,000","4,399","8,239","743"];
    let newPrice = ["1,222","3,000","7,200","544"];
    let description = [["new Phonic tail","Extra Ordinary"],
                       ["new Phonic tail","Prime Product"],
                       ["new Phonic tail","Rich Product"],
                       ["new Phonic tail","Small size"]];
   return(
    <div className="Product">
        <h3>{Title}</h3>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <hr/>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
   );
}


export default Product;