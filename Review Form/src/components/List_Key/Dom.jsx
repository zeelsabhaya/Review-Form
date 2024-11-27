const Dom = ({name, quantity, price}) =>{
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <span>Price: {price}</span>
        </div>
    )
}
export default Dom;