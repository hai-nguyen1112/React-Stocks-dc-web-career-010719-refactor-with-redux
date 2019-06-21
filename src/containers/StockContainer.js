import React from 'react'
import Stock from '../components/Stock'
import {connect} from 'react-redux'

const StockContainer = ({stocks, onStockClick, sortValue, filterValue}) => {
  let stockCards = stocks.sort(sortValue === "Price" ? (a, b) => a.price - b.price : (a, b) => a.name.localeCompare(b.name))
                         .filter(filterValue === "Tech" ? stock => stock.type === "Tech" : filterValue === "Finance" ? stock => stock.type === "Finance" : filterValue === "Sportswear" ? stock => stock.type === "Sportswear" : stock => stock)
                         .map(stock => <Stock key={stock.id} stock={stock}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks,
    sortValue: state.sortValue,
    filterValue: state.filterValue
  }
}

export default connect(mapStateToProps)(StockContainer)
