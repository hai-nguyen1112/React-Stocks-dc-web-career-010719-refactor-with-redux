import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card, Button, Image, Form} from 'semantic-ui-react'
import {isEmpty} from 'lodash'
import {editStock} from '../redux/actions'

class StockEditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: isEmpty(props.stock) ? "" : props.stock.name,
      type: isEmpty(props.stock) ? "" : props.stock.type,
      ticker: isEmpty(props.stock) ? "" : props.stock.ticker,
      price: isEmpty(props.stock) ? "" : props.stock.price
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({name: nextProps.stock.name, type: nextProps.stock.type, ticker: nextProps.stock.ticker, price: nextProps.stock.price})
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleEditSubmit = e => {
    e.preventDefault()
    let editData = {}
    if (this.state.name !== this.props.stock.name) {
      editData["name"] = this.state.name
    }
    if (parseFloat(this.state.price, 10) !== parseFloat(this.props.stock.price, 10)) {
      editData["price"] = parseFloat(this.state.price, 10)
    }
    if (this.state.type !== this.props.stock.type) {
      editData["type"] = this.state.type
    }
    if (this.state.ticker !== this.props.stock.ticker) {
      editData["ticker"] = this.state.ticker
    }
    this.props.onStockEdit(this.props.stock.id, editData)
    this.props.history.push(`/stocks/${this.props.stock.id}`)
    console.log(editData)
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      {
        isEmpty(this.props.stock)
        ?
        null
        :
        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
          <Card.Content>
            <Form onSubmit={e => this.handleEditSubmit(e)}>
              <Form.Field>
                <label>Company Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Ticker</label>
                <input
                  type="text"
                  name="ticker"
                  value={this.state.ticker}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Link to={`/stocks/${this.props.stock.id}`}><Button>Cancel</Button></Link>
              <Button type="submit">Save</Button>
            </Form>
          </Card.Content>
        </Card>
      }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stock: state.stocks.find(stock => stock.id === parseInt(ownProps.match.params.id, 10))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onStockEdit: (id, editData) => dispatch(editStock(id, editData))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockEditForm))
