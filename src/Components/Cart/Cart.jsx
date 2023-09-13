const Cart = ({selectedcard, remainning, totalcost}) => {
    
    return (
        <div>
            <div>
            <h1 className="text-3xl text-white font-bold ">Carts: {selectedcard.length}</h1>
            <h3 className="text-sm text-white">TotalCost: {totalcost}</h3>
            <h3 className="text-sm text-white">Remainning: {remainning}</h3>
            {
                selectedcard.map(card => (<h3 className="text-white">Actor: {card.name}</h3>))
            }
            </div>
            
        </div>
    );
};

export default Cart;