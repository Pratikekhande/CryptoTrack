import React from 'react'
import './Coin.css'

const Coin = ({
    name,
    image,
    symbol,
    price,
    volume,
    priceChange,
    marketcap,
}) => {
    return (
        <div>
            {/* <div className="container">
    <div className="coin">
      <img src={image} alt="crypto" />
      <h1>{name}</h1>
      <p className="coin-symbol">{symbol}</p>
    </div>
    <div className="coin-data">
      <p className="coin-price">${price.toFixed(1)}</p>
      <p className="coin-volume">${volume.toLocaleString()}</p>

      {priceChange < 0 ? (
        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
      ) : (
        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
      )}

      <p className="coin-marketcap">Mkt Cap: ${marketcap.toLocaleString()}</p>
    </div>
  </div> */}



            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={image} alt="crypto" />
                        <h1>{name}</h1>
                        <p className="coin-symbol"></p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">Rs.{price}</p>
                   {/* <p className="coin-volume">Rs.{volume.toLocaleString()}</p> */}
                        {priceChange < 0 ? (
                            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                        )
                        }
                        <p className="coin-marketcap">
                            Mkt Cap: Rs.{marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin