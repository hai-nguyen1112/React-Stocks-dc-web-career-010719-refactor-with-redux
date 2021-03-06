import React, {Component} from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import StockNewForm from '../components/StockNewForm'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar />

          <div className="row">
            <div className="col-8">

              <StockContainer />

            </div>
            <div className="col-4">

              <PortfolioContainer />

            </div>
          </div>
        <StockNewForm />
      </div>
    );
  }

}

export default MainContainer
