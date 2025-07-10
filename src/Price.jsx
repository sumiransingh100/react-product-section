export default function Price({oldPrice, newPrice}){
    let styles ={
        backgroundColor : "#FFB85C",
        padding : "13px",
        borderRadius: "9px"
    }
    let oldStyle = {
        textDecorationLine : "line-through"   
    }
    let newStyle = {
        fontWeight : "bold"
    }
    return(
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}