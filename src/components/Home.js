import React, { useState, useEffect, useRef } from "react";
import Api from "./Api"
import Coin from "./Coin"
const Home = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    const inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        console.log("componentDidMount");

        Api().then((res) => setCoins(res));
    }, []);

    console.log("Coin Data:", coins);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("Filtered Coins:", filteredCoins);

    return (
        <div className="coin-app">
                            {/* <h2 className="coin-text my-5  "style={{ margin: "2px 600px"}} >Search For A Currency.</h2> */}

            <div className="input-group mb-3">
                <input ref={inputRef} onChange={handleChange} type="text" className="form-control"  style={{ margin: "50px 500px", marginTop: '10px', width:"20%" }} placeholder="Search" aria-label="Search" />
             </div>
            {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
        </div>
    )
}

export default Home
// style={{ margin: "35px 0px", marginTop: '90px' }}