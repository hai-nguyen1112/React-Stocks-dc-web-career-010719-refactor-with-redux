import React from 'react'
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'
import {fetchStocks} from './redux/actions'
import {Route, Switch, Redirect} from 'react-router-dom'
import StockDetail from './components/StockDetail'
import StockEditForm from './components/StockEditForm'

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchStocks()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/stocks/:id/edit" component={StockEditForm} />
          <Route path="/stocks/:id" component={StockDetail} />
          <Route path="/stocks" component={MainContainer} />
          <Redirect from="*" to="/stocks" />
        </Switch>
      </div>
    )
  }
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
