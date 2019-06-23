import React, {useState} from 'react'
import {Button, Form} from 'semantic-ui-react'
import {postNewStock} from '../redux/actions'
import {connect} from 'react-redux'

const StockNewForm = ({onFormSubmit}) => {
  const [ticker, setTicker] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [price, setPrice] = useState("")

  const handleChange = e => {
    e.target.name === "Ticker"
    ?
    setTicker(e.target.value)
    :
    e.target.name === "Name"
    ?
    setName(e.target.value)
    :
    e.target.name === "Type"
    ?
    setType(e.target.value)
    :
    setPrice(e.target.value)
  }

  const handleFormSubmit = () => {
    onFormSubmit(ticker, name, type, parseFloat(price))
    setTicker("")
    setName("")
    setType("")
    setPrice("")
  }

  return (
    <div style={{marginTop: "10px"}}>
      <h1 style={{textAlign: "center"}}>Add New Stock</h1>
      <Form onSubmit={handleFormSubmit} style={{marginLeft: "40%", marginRight: "40%", marginBottom: "10px", backgroundColor: "lightPink", borderRadius: "5px", padding: "10px"}}>
        <Form.Field>
          <label style={{color: "red"}}>Ticker</label>
          <input
            placeholder="Enter Ticker..."
            name="Ticker"
            value={ticker}
            type="text"
            onChange={e => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label style={{color: "red"}}>Company Name</label>
          <input
            placeholder="Enter Company Name..."
            name="Name"
            value={name}
            type="text"
            onChange={e => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label style={{color: "red"}}>Type</label>
          <input
            placeholder="Enter Type..."
            name="Type"
            value={type}
            type="text"
            onChange={e => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <label style={{color: "red"}}>Price</label>
          <input
            placeholder="Enter Price..."
            name="Price"
            value={price}
            type="text"
            onChange={e => handleChange(e)}
          />
        </Form.Field>
        <Button inverted color="white" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onFormSubmit: (ticker, name, type, price) => dispatch(postNewStock(ticker, name, type, price))
  }
}

export default connect(null, mapDispatchToProps)(StockNewForm)
