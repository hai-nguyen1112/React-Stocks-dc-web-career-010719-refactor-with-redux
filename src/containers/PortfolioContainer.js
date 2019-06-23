import React from 'react'
import Stock from '../components/Stock'
import {connect} from 'react-redux'
import {soldStock} from '../redux/actions'

const PortfolioContainer = ({boughtStocks, onStockSell}) => {
  let position = -1
  let boughtStockCards = boughtStocks.map(stock => {
    position++
    return (<Stock key={position} position={position} stock={stock} onStockSell={onStockSell}/>)
  })
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
    onStockSell: position => dispatch(soldStock(position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)
