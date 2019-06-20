import React from 'react'

const Stock = ({stock, onStockClick, position}) => (
  <div>

    <div className="card" onClick={() => onStockClick(stock, position)}>
      <div className="card-body">
        <h5 className="card-title">{
            stock.name.charAt(0).toUpperCase() + stock.name.slice(1)
          }</h5>
        <p className="card-text">{
            `${stock.ticker}: ${stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
