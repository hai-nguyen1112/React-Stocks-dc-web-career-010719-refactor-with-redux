import React, {useEffect} from 'react'
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'
import {fetchStocks} from './redux/actions'

const App = ({onFetchStocks}) => {
  useEffect(() => onFetchStocks())
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchStocks: () => dispatch(fetchStocks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
