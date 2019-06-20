import {combineReducers} from 'redux'

const stocksReducer = (oldState=[], action) => {
  switch (action.type) {
    case "STOCKS_WERE_FETCHED":
      return action.payload
    default:
      return oldState
  }
}

const boughtStocksReducer = (oldState=[], action) => {
  switch (action.type) {
    case "STOCK_WAS_BOUGHT":
      let boughtStocks = [...oldState]
      boughtStocks.push(action.payload)
      return boughtStocks
    case "STOCK_WAS_SOLD":
      let newBoughtStocks = [...oldState]
      return newBoughtStocks.filter(stock => newBoughtStocks.indexOf(stock) !== action.payload)
    default:
      return oldState
  }
}

const sortValueReducer = (oldState="Alphabetically", action) => {
  switch (action.type) {
    case "SORT_VALUE_CHANGE":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  stocks: stocksReducer,
  boughtStocks: boughtStocksReducer,
  sortValue: sortValueReducer
})

export default rootReducer
