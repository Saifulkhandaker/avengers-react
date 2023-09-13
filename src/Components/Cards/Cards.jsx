import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";


const Cards = () => {
  const [cards, setCards] = useState([]);
  const [selectedcard, setSelectedCard] = useState([]);
  // totalreaming 
  const [remainning, setRemaining] = useState(0);
  // totalcost
  const [totalcost, setTotalCost] = useState(0);


  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

 
  const  handleCard = (card) =>{
    // cheaking if the selec item already exists
    const isExist = selectedcard.find(item => item.id === card.id)

    let count = card.salary;
    if(isExist){
     return alert('already exist')
    }else{
      selectedcard.forEach(item => {
        count = count + item.salary;
      });
      const totalRemainning = 20000 - count;
      
      // if cost cross 20000
      if(count > 20000){
       return alert('sry taka sesh')
      }else{
        setTotalCost(count);
      setRemaining(totalRemainning);
      setSelectedCard([...selectedcard,card]);
      }
      
    }
  }
  
  return (
    <div>
        <h1 className="text-3xl text-white font-bold ">Card:{cards.length}</h1>
      
      <div className='w-11/12 mx-auto mt-5  md:flex justify-between gap-5'>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => (
          <Card card={card}
            handleCard={handleCard}
          > 
          </Card>
        ))}
      </div>
      <div>
        <Cart selectedcard={selectedcard} 
        remainning={remainning}
        totalcost={totalcost}
        ></Cart>
      </div>
      </div>
    </div>
  );
};

export default Cards;
