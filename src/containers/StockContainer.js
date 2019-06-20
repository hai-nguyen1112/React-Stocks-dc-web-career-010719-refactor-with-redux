import React from 'react'
import Stock from '../components/Stock'
import {connect} from 'react-redux'
import {clickedStock} from '../redux/actions'

const StockContainer = ({stocks, onStockClick, sortValue}) => {
  let stockCards = stocks.sort(sortValue === "Price" ? (a, b) => a.price - b.price : (a, b) => a.name.localeCompare(b.name))
                         .map(stock => <Stock key={stock.id} stock={stock} onStockClick={onStockClick}/>)
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
    sortValue: state.sortValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStockClick: (stock, position) => dispatch(clickedStock(stock, position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockContainer)
