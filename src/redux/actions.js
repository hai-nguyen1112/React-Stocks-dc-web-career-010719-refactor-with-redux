function fetchStocks() {
  return dispatch => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => dispatch(fetchedStocks(stocks)))
  }
}

function fetchedStocks(stocks) {
  return {
    type: "STOCKS_WERE_FETCHED",
    payload: stocks
  }
}

function clickedStock(stock, position) {
  return dispatch => {
    position === undefined
    ?
    dispatch(clickedStockToBuy(stock))
    :
    dispatch(clickedStockToSell(position))
  }
}

function clickedStockToBuy(stock) {
  return {
    type: "STOCK_WAS_BOUGHT",
    payload: stock
  }
}

function clickedStockToSell(position) {
  return {
    type: "STOCK_WAS_SOLD",
    payload: position
  }
}

function changedSortValue(e) {
  return {
    type: "SORT_VALUE_CHANGE",
    payload: e.target.value
  }
}

export {fetchStocks, clickedStock, changedSortValue}
