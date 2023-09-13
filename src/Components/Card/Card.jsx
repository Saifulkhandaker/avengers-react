const Card = ({ card, handleCard }) => {
  const { name, role, image, salary, country, fbUrl, twitter } = card;
  

  return (
    <div>
      <div className="card card-compact rounded-l-3xl border-x-2 border-white text-white shadow-2xll text-center">
        <figure className="">
          <img className="mt-5 rounded-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold ">{name}</h2>
          <p className="text-xl">{country}</p>
          <div className="flex gap-5">
            <p className="text-xl">
              Role: <span className="font-medium">{role}</span>
            </p>
            <p className="text-xl">
              Price: <span className="font-medium">{salary} $</span>
            </p>
          </div>
          <div className="">
            <a className="underline font-bold" href={fbUrl}>
              Facebook
            </a>
            <a className=" underline font-bold ml-5" href={twitter}>
              Twitter
            </a>
          </div>
          <div>
            <button onClick={()=>handleCard(card)} className="btn ">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
