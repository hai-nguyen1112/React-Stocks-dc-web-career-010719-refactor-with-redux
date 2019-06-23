import {combineReducers} from 'redux'

const stocksReducer = (oldState=[], action) => {
  let stocks = [...oldState]
  switch (action.type) {
    case "STOCKS_WERE_FETCHED":
      return action.payload
    case "NEW_STOCK_WAS_POSTED":
      stocks.push(action.payload)
      return stocks
    case "STOCK_WAS_EDITED":
      return stocks.map(stock => {
        if (stock.id === action.payload.id) {
          return action.payload
        } else {
          return stock
        }
      })
    default:
      return stocks
  }
}

const boughtStocksReducer = (oldState=[], action) => {
  let boughtStocks = [...oldState]
  switch (action.type) {
    case "STOCK_WAS_SOLD":
      return boughtStocks.filter(stock => boughtStocks.indexOf(stock) !== action.payload)
    case "STOCK_WAS_ADDED":
      boughtStocks.push(action.payload)
      return boughtStocks
    default:
      return boughtStocks
  }
}

const sortValueReducer = (oldState="Alphabetically", action) => {
  switch (action.type) {
    case "SORT_VALUE_WAS_CHANGE":
      return action.payload
    default:
      return oldState
  }
}

const filterValueReducer = (oldState="All", action) => {
  switch (action.type) {
    case "FILTER_VALUE_WAS_CHANGED":
      return action.payload
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  stocks: stocksReducer,
  boughtStocks: boughtStocksReducer,
  sortValue: sortValueReducer,
  filterValue: filterValueReducer
})

export default rootReducer
