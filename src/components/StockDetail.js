import React from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {isEmpty} from "lodash"
import {addedStock} from '../redux/actions'

const StockDetail = ({stock, onStockAdd, history}) => {
  return (
    <div style={{marginTop: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {
          isEmpty(stock)
          ?
          null
          :
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>{stock.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{stock.type}</span>
              </Card.Meta>
              <Card.Description>
                {`${stock.ticker}: ${stock.price}`}
              </Card.Description>
              <br />
              <Link to="/stocks"><Button>Back</Button></Link>
              <Button onClick={() => {onStockAdd(stock); history.push("/stocks")}}>Add</Button>
              <Link to={`/stocks/${stock.id}/edit`}><Button>Edit</Button></Link>
            </Card.Content>
          </Card>
        }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stock: state.stocks.find(stock => stock.id === parseInt(ownProps.match.params.id, 10))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStockAdd: stock => dispatch(addedStock(stock))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockDetail))
