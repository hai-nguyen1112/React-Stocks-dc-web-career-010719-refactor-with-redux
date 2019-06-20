import React from 'react'
import Stock from '../components/Stock'
import {connect} from 'react-redux'
import {clickedStock} from '../redux/actions'

const PortfolioContainer = ({boughtStocks, onStockClick}) => {
  let boughtStockCards = boughtStocks.map(stock => <Stock key={boughtStocks.indexOf(stock)} position={boughtStocks.indexOf(stock)} stock={stock} onStockClick={onStockClick}/>)
  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStockCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    boughtStocks: state.boughtStocks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStockClick: (stock, position) => dispatch(clickedStock(stock, position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)
