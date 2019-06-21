import React from 'react'
import {withRouter} from 'react-router-dom'

const Stock = ({stock, position, history, onStockSell}) => (
  <div>
    <div className="card" onClick={() => position === undefined ? history.push(`/stocks/${stock.id}`) : onStockSell(position)}>
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
)

export default withRouter(Stock)
