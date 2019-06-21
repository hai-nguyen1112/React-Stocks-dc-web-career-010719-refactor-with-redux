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

function addedStock(stock) {
  return {
    type: "STOCK_WAS_ADDED",
    payload: stock
  }
}

function soldStock(position) {
  return {
    type: "STOCK_WAS_SOLD",
    payload: position
  }
}

function changedSortValue(e) {
  return {
    type: "SORT_VALUE_WAS_CHANGE",
    payload: e.target.value
  }
}

function changedFilterValue(e) {
  return {
    type: "FILTER_VALUE_WAS_CHANGED",
    payload: e.target.value
  }
}

function postNewStock(ticker, name, type, price) {
  return dispatch => {
    fetch('http://localhost:3000/stocks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        ticker: ticker,
        name: name,
        type: type,
        price: price
      })
    }).then(res => res.json())
      .then(newStock => dispatch(postedNewStock(newStock)))
  }
}

function postedNewStock(newStock) {
  return {
    type: "NEW_STOCK_WAS_POSTED",
    payload: newStock
  }
}

export {fetchStocks, changedSortValue, changedFilterValue, postNewStock, addedStock, soldStock}
